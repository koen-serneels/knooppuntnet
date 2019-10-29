package kpn.core.database.views.analyzer

import kpn.core.database.Database
import kpn.core.database.query.Query
import kpn.core.database.views.common.View
import kpn.shared.node.NodeNetworkReference

object NodeNetworkReferenceView extends View {

  private case class ViewResult(
    rows: Seq[ViewResultRow]
  )

  private case class ViewResultRow(
    value: Option[NodeNetworkReference]
  )

  def query(database: Database, nodeId: Long, stale: Boolean): Seq[NodeNetworkReference] = {
    val query = Query(AnalyzerDesign, NodeNetworkReferenceView, classOf[ViewResult]).stale(stale).keyStartsWith(nodeId)
    val result = database.execute(query)
    result.rows.flatMap(_.value)
  }

  override def reduce: Option[String] = None

}
