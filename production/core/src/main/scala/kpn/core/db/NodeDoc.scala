package kpn.core.db

import kpn.shared.NodeInfo

case class NodeDoc(_id: String, node: NodeInfo, _rev: Option[String] = None)