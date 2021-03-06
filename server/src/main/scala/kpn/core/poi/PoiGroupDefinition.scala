package kpn.core.poi

import kpn.shared.tiles.ClientPoiGroupDefinition

case class PoiGroupDefinition(name: String, defaultEnabled: Boolean, definitions: PoiDefinition*) {

  def toClient: ClientPoiGroupDefinition = {
    ClientPoiGroupDefinition(name, defaultEnabled, definitions.toSeq.map(_.toClient).distinct)
  }

}
