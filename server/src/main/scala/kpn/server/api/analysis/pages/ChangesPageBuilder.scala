package kpn.server.api.analysis.pages

import kpn.shared.ChangesPage
import kpn.shared.changes.filter.ChangesParameters

trait ChangesPageBuilder {
  def build(user: Option[String], parameters: ChangesParameters): ChangesPage
}
