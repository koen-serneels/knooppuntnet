package kpn.server.analyzer.engine.changes.node

import kpn.server.analyzer.engine.changes.data.AnalysisData
import kpn.shared.Fact
import kpn.shared.SharedTestObjects
import kpn.shared.data.Tags
import org.scalatest.FunSuite
import org.scalatest.Matchers

class NodeChangeFactAnalyzerTest extends FunSuite with Matchers with SharedTestObjects {

  test("no facts") {
    val analysisData = AnalysisData()
    val before = newRawNode()
    val after = newRawNode()

    val analyzer = new NodeChangeFactAnalyzer(analysisData)
    analyzer.facts(before, after) should equal(
      Seq()
    )
  }

  test("LostHikingNodeTag") {
    val analysisData = AnalysisData()
    val before = newRawNode(tags = Tags.from("rwn_ref" -> "01", "network:type" -> "node_network"))
    val after = newRawNode()

    val analyzer = new NodeChangeFactAnalyzer(analysisData)
    analyzer.facts(before, after) should equal(
      Seq(Fact.LostHikingNodeTag)
    )
  }

  test("LostBicycleNodeTag") {
    val analysisData = AnalysisData()
    val before = newRawNode(tags = Tags.from("rcn_ref" -> "01", "network:type" -> "node_network"))
    val after = newRawNode()

    val analyzer = new NodeChangeFactAnalyzer(analysisData)
    analyzer.facts(before, after) should equal(
      Seq(Fact.LostBicycleNodeTag)
    )
  }

  test("WasOrphan") {
    val analysisData = AnalysisData()
    analysisData.orphanNodes.watched.add(1)
    val before = newRawNode()
    val after = newRawNode()

    val analyzer = new NodeChangeFactAnalyzer(analysisData)
    analyzer.facts(before, after) should equal(
      Seq(Fact.WasOrphan)
    )
  }

  test("Orphan node that remains orphan") {
    val analysisData = AnalysisData()
    analysisData.orphanNodes.watched.add(1001)
    val before = newRawNodeWithName(1001, "01")
    val after = newRawNodeWithName(1001, "01")

    val analyzer = new NodeChangeFactAnalyzer(analysisData)
    analyzer.facts(before, after) should equal(Seq())
  }

}
