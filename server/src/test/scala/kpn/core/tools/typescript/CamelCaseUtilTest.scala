package kpn.core.tools.typescript

import org.scalatest.FunSuite
import org.scalatest.Matchers

class CamelCaseUtilTest extends FunSuite with Matchers {

  test("case class name") {
    CamelCaseUtil.toDashed("FunSuiteTest") should equal("fun-suite-test")
  }

  test("all uppercase") {
    CamelCaseUtil.toDashed("TEST") should equal("test")
  }

  test("uppercase words") {
    CamelCaseUtil.toDashed("textWITHSomeALLUppercaseWORDS") should equal("text-with-some-all-uppercase-words")
  }

}
