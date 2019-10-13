package kpn.core.engine.analysis.location

import kpn.core.db.json.JsonFormats
import org.apache.commons.io.FileUtils
import spray.json._

object LocationConfigurationReader {

  def main(args: Array[String]): Unit = {

    def printLocation(indent: Int, location: LocationDefinition): Unit = {
      val area = (location.children.map(_.geometry.getArea).sum * 1000).toInt
      val spaces = (0 to indent).map(x => "  ").mkString
      val children = if (location.children.isEmpty) {
        " area=" + (location.geometry.getArea * 1000).toInt
      }
      else {
        "  (" + location.children.size + ")" + " area=" + (location.geometry.getArea * 1000).toInt + "/" + area
      }
      println(spaces + location.name + " " + location.names.mkString(",") + children)
      location.children.foreach { child =>
        printLocation(indent + 1, child)
      }
    }

    val locationConfiguration = new LocationConfigurationReader().read()
    locationConfiguration.locations.foreach { location =>
      printLocation(0, location)
    }
  }
}

class LocationConfigurationReader {

  def read(): LocationConfiguration = {
    val string = FileUtils.readFileToString(LocationConfigurationDefinition.treeFile)
    val root = JsonFormats.locationTreeFormat.read(string.parseJson)
    LocationConfiguration(root.children.map(toLocationConfiguration))
  }

  private def toLocationConfiguration(tree: LocationTree): LocationDefinition = {
    val children = tree.children.map(toLocationConfiguration)
    val file = LocationConfigurationDefinition.file(tree.name)
    new LocationDefinitionReader(file).read(children)
  }
}