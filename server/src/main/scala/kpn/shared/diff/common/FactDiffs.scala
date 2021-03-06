package kpn.shared.diff.common

import kpn.shared.Fact

case class FactDiffs(
  resolved: Set[Fact] = Set.empty,
  introduced: Set[Fact] = Set.empty,
  remaining: Set[Fact] = Set.empty
) {

  def isEmpty: Boolean = !nonEmpty

  def nonEmpty: Boolean = resolved.nonEmpty || introduced.nonEmpty || remaining.nonEmpty

  def happy: Boolean = resolved.nonEmpty

  def investigate: Boolean = introduced.exists(_.isError)
}
