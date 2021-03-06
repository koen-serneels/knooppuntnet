package kpn.server.analyzer.engine.changes.builder

import kpn.shared.changes.details.NodeChange

trait NodeChangeBuilder {
  def build(context: ChangeBuilderContext): Seq[NodeChange]
}
