package kpn.core.database.views.changes

import kpn.core.database.Database
import kpn.core.database.query.Fields
import kpn.core.database.query.Query
import kpn.core.database.views.common.View
import kpn.shared.ChangeSetSummary
import kpn.shared.changes.details.NetworkChange
import kpn.shared.changes.details.NodeChange
import kpn.shared.changes.details.RouteChange
import kpn.shared.changes.filter.ChangesFilterPeriod
import kpn.shared.changes.filter.ChangesParameters

object ChangesView extends View {

  private case class ViewResultRow(key: Seq[String], value: Seq[Int])

  private case class ViewResult(rows: Seq[ViewResultRow])

  def queryPeriod(database: Database, suffixLength: Int, keys: Seq[String], stale: Boolean = true): Seq[ChangesFilterPeriod] = {

    def keyString(values: Seq[String]): String = values.mkString("[\"", "\", \"", "\"]")

    def suffix(size: Int, character: String): String = Seq.fill(size)(character).mkString

    val startKey = keyString(keys :+ suffix(suffixLength, "9"))
    val endKey = keyString(keys :+ suffix(suffixLength, "0"))

    val query = Query(ChangesDesign, ChangesView, classOf[ViewResult])
      .startKey(startKey)
      .endKey(endKey)
      .reduce(true)
      .descending(true)
      .groupLevel(keys.size + 1)
      .stale(stale)

    val result = database.execute(query)
    result.rows.map { row =>
      val keyFields = Fields(row.key)
      ChangesFilterPeriod(
        name = keyFields.string(keys.size),
        totalCount = row.value.head,
        impactedCount = row.value(1)
      )
    }
  }

  def queryChangeCount(database: Database, elementType: String, elementId: Long, stale: Boolean = true): Int = {
    val query = Query(ChangesDesign, ChangesView, classOf[ViewResult])
      .keyStartsWith(elementType, elementId.toString)
      .groupLevel(2)
      .stale(stale)
    val result = database.execute(query)
    result.rows.map(_.value.head).sum
  }

  def changes(database: Database, parameters: ChangesParameters, stale: Boolean = true): Seq[ChangeSetSummary] = {
    ChangesViewChangesQuery.changes(database, parameters, stale)
  }

  def networkChanges(database: Database, parameters: ChangesParameters, stale: Boolean = true): Seq[NetworkChange] = {
    ChangesViewNetworkChangesQuery.networkChanges(database, parameters, stale)
  }

  def routeChanges(database: Database, parameters: ChangesParameters, stale: Boolean = true): Seq[RouteChange] = {
    ChangesViewRouteChangesQuery.routeChanges(database, parameters, stale)
  }

  def nodeChanges(database: Database, parameters: ChangesParameters, stale: Boolean = true): Seq[NodeChange] = {
    ChangesViewNodeChangesQuery.nodeChanges(database, parameters, stale)
  }

  override val reduce: Option[String] = Some("_sum")
}
