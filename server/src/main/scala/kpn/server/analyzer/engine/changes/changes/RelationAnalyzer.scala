package kpn.server.analyzer.engine.changes.changes

import kpn.shared.NetworkType
import kpn.shared.Timestamp
import kpn.shared.data.Way
import kpn.shared.data._

trait RelationAnalyzer {

  def routeName(relation: Relation): String

  def networkType(relation: Relation): Option[NetworkType]

  def toElementIds(relation: Relation): ElementIds

  def referencedNetworkNodes(relation: Relation): Set[Node]

  def referencedRoutes(relation: Relation): Set[Relation]

  def referencedNetworks(relation: Relation): Set[Relation]

  def referencedNodes(relation: Relation): Set[Node]

  def referencedNonConnectionNodes(relation: Relation): Set[Node]

  def referencedWays(relation: Relation): Set[Way]

  def referencedRelations(relation: Relation): Set[Relation]

  def lastUpdated(relation: Relation): Timestamp

  def waysLength(relation: Relation): Int

}
