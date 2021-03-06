package kpn.core.util

import org.scalatest.FunSuite
import org.scalatest.Matchers

class FormatterTest extends FunSuite with Matchers {

  test("percentage") {
    Formatter.percentage(0, 0) should equal("-")
    Formatter.percentage(1, 3) should equal("33,33%")
    Formatter.percentage(2, 3) should equal("66,67%")
  }
}
