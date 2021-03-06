package kpn.server.api.analysis.pages.subset

import kpn.shared.Subset
import kpn.shared.subset.SubsetNetworksPage

trait SubsetNetworksPageBuilder {
  def build(subset: Subset): SubsetNetworksPage
}
