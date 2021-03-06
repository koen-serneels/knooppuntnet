package kpn.shared.network

import kpn.shared.changes.details.NetworkChangeInfo
import kpn.shared.changes.filter.ChangesFilter

case class NetworkChangesPage(
  network: NetworkSummary,
  filter: ChangesFilter,
  changes: Seq[NetworkChangeInfo],
  totalCount: Int) {
}
