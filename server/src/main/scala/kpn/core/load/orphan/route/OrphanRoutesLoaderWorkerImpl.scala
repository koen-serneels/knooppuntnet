package kpn.core.load.orphan.route

import kpn.core.changes.RelationAnalyzer
import kpn.core.engine.analysis.NetworkNodeBuilder
import kpn.core.engine.analysis.country.CountryAnalyzer
import kpn.core.engine.analysis.route.MasterRouteAnalyzer
import kpn.core.load.RouteLoader
import kpn.server.repository.AnalysisRepository
import kpn.server.repository.NodeInfoBuilder
import kpn.core.tools.analyzer.AnalysisContext
import kpn.core.util.Log
import kpn.shared.Timestamp

class OrphanRoutesLoaderWorkerImpl(
  analysisContext: AnalysisContext,
  routeLoader: RouteLoader,
  routeAnalyzer: MasterRouteAnalyzer,
  relationAnalyzer: RelationAnalyzer,
  countryAnalyzer: CountryAnalyzer,
  analysisRepository: AnalysisRepository
) extends OrphanRoutesLoaderWorker {

  val log = Log(classOf[OrphanRoutesLoaderWorkerImpl])

  override def process(timestamp: Timestamp, routeId: Long): Unit = {
    log.unitElapsed {
      val loadedRouteOption = routeLoader.loadRoute(timestamp, routeId)
      loadedRouteOption match {
        case Some(loadedRoute) =>

          val allNodes = new NetworkNodeBuilder(analysisContext, loadedRoute.data, loadedRoute.networkType, countryAnalyzer).networkNodes
          val analysis = routeAnalyzer.analyze(allNodes, loadedRoute, orphan = true)
          val route = analysis.route.copy(orphan = true)
          analysisRepository.saveRoute(route)

          allNodes.values.foreach { networkNode =>
            analysisRepository.saveNode(
              NodeInfoBuilder.build(
                id = networkNode.id,
                active = true,
                orphan = false,
                country = networkNode.country,
                latitude = networkNode.node.latitude,
                longitude = networkNode.node.longitude,
                lastUpdated = networkNode.node.timestamp,
                tags = networkNode.node.tags,
                facts = Seq()
              )
            )
          }

          val elementIds = relationAnalyzer.toElementIds(loadedRoute.relation)
          analysisContext.data.orphanRoutes.watched.add(loadedRoute.id, elementIds)

        case None => // error already logged in routeLoader
      }
      s"""Loaded route $routeId"""
    }
  }
}