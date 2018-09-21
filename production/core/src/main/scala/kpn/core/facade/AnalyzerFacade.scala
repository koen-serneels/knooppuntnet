package kpn.core.facade

import kpn.core.app._
import kpn.core.gpx.GpxFile
import kpn.shared.ApiResponse
import kpn.shared.ChangesPage
import kpn.shared.Fact
import kpn.shared.NetworkType
import kpn.shared.ReplicationId
import kpn.shared.Subset
import kpn.shared.changes.ChangeSetPage
import kpn.shared.changes.filter.ChangesParameters
import kpn.shared.network.NetworkChangesPage
import kpn.shared.network.NetworkDetailsPage
import kpn.shared.network.NetworkFactsPage
import kpn.shared.network.NetworkMapPage
import kpn.shared.network.NetworkNodesPage
import kpn.shared.network.NetworkRoutesPage
import kpn.shared.node.MapDetailNode
import kpn.shared.node.NodePage
import kpn.shared.route.MapDetailRoute
import kpn.shared.route.RoutePage
import kpn.shared.statistics.Statistics
import kpn.shared.subset.SubsetFactDetailsPage
import kpn.shared.subset.SubsetChangesPage
import kpn.shared.subset.SubsetFactsPage
import kpn.shared.subset.SubsetNetworksPage
import kpn.shared.subset.SubsetOrphanNodesPage
import kpn.shared.subset.SubsetOrphanRoutesPage

trait AnalyzerFacade {

  def node(user: Option[String], nodeId: Long): ApiResponse[NodePage]

  def route(user: Option[String], routeId: Long): ApiResponse[RoutePage]

  def subsetNetworks(user: Option[String], subset: Subset): ApiResponse[SubsetNetworksPage]

  def subsetFacts(user: Option[String], subset: Subset): ApiResponse[SubsetFactsPage]

  def subsetOrphanNodes(user: Option[String], subset: Subset): ApiResponse[SubsetOrphanNodesPage]

  def subsetOrphanRoutes(user: Option[String], subset: Subset): ApiResponse[SubsetOrphanRoutesPage]

  def subsetChanges(user: Option[String], parameters: ChangesParameters): ApiResponse[SubsetChangesPage]

  def networkDetails(user: Option[String], id: Long): ApiResponse[NetworkDetailsPage]

  def networkMap(user: Option[String], networkId: Long): ApiResponse[NetworkMapPage]

  def networkFacts(user: Option[String], id: Long): ApiResponse[NetworkFactsPage]

  def networkNodes(user: Option[String], id: Long): ApiResponse[NetworkNodesPage]

  def networkRoutes(user: Option[String], id: Long): ApiResponse[NetworkRoutesPage]

  def networkChanges(user: Option[String], parameters: ChangesParameters): ApiResponse[NetworkChangesPage]

  // TODO not used anymore? have to re-implement? cleanup?
  def gpx(user: Option[String], networkId: Long): Option[GpxFile]

  def overview(user: Option[String]): ApiResponse[Statistics]

  // TODO no longer used? cleanup?
  def integrityCheckFacts(user: Option[String], country: String, networkType: String): IntegrityCheckPage

  def subsetFactDetails(user: Option[String], subset: Subset, fact: Fact): ApiResponse[SubsetFactDetailsPage]

  def changeSet(user: Option[String], changeSetId: Long, replicationId: Option[ReplicationId]): ApiResponse[ChangeSetPage]

  def changes(user: Option[String], parameters: ChangesParameters): ApiResponse[ChangesPage]

  def mapDetailNode(user: Option[String], networkType: NetworkType, nodeId: Long): ApiResponse[MapDetailNode]

  def mapDetailRoute(user: Option[String], routeId: Long): ApiResponse[MapDetailRoute]

}