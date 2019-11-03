package kpn.core.changes

import org.scalatest.FunSuite
import org.scalatest.Matchers

import kpn.core.test.TestData

class RelationAnalyzerTest extends FunSuite with Matchers {

  test("referenced nodes, ways and relations") {

    val network = new TestData() {
      node(1001)
      node(1002)
      node(1003)
      way(101, 1001, 1002)
      route(11, "01-02",
        Seq(
          newMember("node", 1003),
          newMember("way", 101)
        )
      )
      networkRelation(1, "name", Seq(newMember("relation", 11)))
    }.data.relations(1)

    RelationAnalyzer.referencedNodes(network).map(_.id) should equal(Set(1001L, 1002L, 1003L))
    RelationAnalyzer.referencedWays(network).map(_.id) should equal(Set(101L))
    RelationAnalyzer.referencedRelations(network).map(_.id) should equal(Set(11L))
  }

  test("node reference in route way") {

    val network = new TestData() {
      node(1001)
      way(101, 1001)
      route(11, "01-02",
        Seq(
          newMember("way", 101)
        )
      )
    }.data.relations(11)

    RelationAnalyzer.referencedNodes(network).map(_.id) should equal(Set(1001L))
  }

}