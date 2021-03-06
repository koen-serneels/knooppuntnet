package kpn.core.database.views.analyzer

import kpn.core.app.stats.Figure
import kpn.core.database.Database
import kpn.core.database.query.Query
import kpn.core.database.views.common.View
import kpn.shared.Subset

object Overview extends View {

  private case class ViewResultRow(
    key: Seq[String],
    value: Int
  )

  private case class ViewResult(rows: Seq[ViewResultRow])

  def query(database: Database, stale: Boolean = true): Seq[Figure] = {
    val query = Query(AnalyzerDesign, Overview, classOf[ViewResult])
      .groupLevel(3)
      .reduce(true)
      .stale(stale)
    val result = database.execute(query)
    val factNames = result.rows.map(_.key.head).sorted.distinct
    factNames.map { factName =>
      val counts = result.rows.filter(_.key.head == factName).map { row =>
        val countryDomain = row.key(1)
        val networkTypeName = row.key(2)
        val subset = Subset.of(countryDomain, networkTypeName).get
        val count = row.value
        subset -> count
      }.toMap
      val total: Int = counts.values.sum
      Figure(factName, total, counts)
    }
  }

  override val reduce: Option[String] = Some("_sum")

}
