package kpn.core.engine.analysis

import org.locationtech.jts.geom.Coordinate
import org.locationtech.jts.geom.GeometryCollection
import org.locationtech.jts.geom.GeometryFactory
import kpn.core.changes.RelationAnalyzer
import kpn.core.util.Log
import kpn.shared.Bounds
import kpn.shared.data.Node
import kpn.shared.data.Relation
import kpn.shared.network.NetworkShape

class NetworkShapeAnalyzer(networkRelation: Relation) {

  val log = Log(classOf[NetworkShapeAnalyzer])

  def shape: Option[NetworkShape] = {
    None
//    log.debugElapsed {
//      ("", calculatedShape)
//    }
  }

  private def calculatedShape: Option[NetworkShape] = {
    val nodes = RelationAnalyzer.referencedNonConnectionNodes(networkRelation)
    val points = toGeometryCollection(nodes)
//    val coordinates = new ConcaveHull(points, 0.03d).getConcaveHull.getCoordinates.toList
//    if (coordinates.nonEmpty) {
//      log.debug(s"nodeCount=${nodes.size}")
//      Some(NetworkShape(bounds(coordinates), shapeCoordinate(coordinates)))
//    }
//    else {
      None
//    }
  }

  private def toGeometryCollection(nodes: Iterable[Node]): GeometryCollection = {
    val factory = new GeometryFactory()
    val points = nodes.map { node: Node =>
      val c = new Coordinate(node.latitude.toDouble, node.longitude.toDouble)
      factory.createPoint(c)
    }
    new GeometryCollection(points.toArray, factory)
  }

  private def bounds(coordinates: List[Coordinate]): Bounds = {
    val minLat = coordinates.map(_.x).min
    val maxLat = coordinates.map(_.x).max
    val minLon = coordinates.map(_.y).min
    val maxLon = coordinates.map(_.y).max
    Bounds(minLat, minLon, maxLat, maxLon)
  }

  private def shapeCoordinate(coordinates: List[Coordinate]): String = coordinates.map(c => s"[${c.x},${c.y}]").mkString(",")
}
