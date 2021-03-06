package kpn.server.json

import com.fasterxml.jackson.databind.ObjectMapper
import kpn.shared.Timestamp
import org.scalatest.FunSuite
import org.scalatest.Matchers
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.json.JsonTest
import org.springframework.test.context.TestContextManager

@JsonTest
class TimestampJsonSerializerTest extends FunSuite with Matchers {

  @Autowired
  var objectMapper: ObjectMapper = _

  new TestContextManager(this.getClass).prepareTestInstance(this)

  test("serializer") {
    val timestamp = Timestamp(2018, 8, 11, 12, 34, 56)
    objectMapper.writeValueAsString(timestamp) should equal(""""2018-08-11T12:34:56Z"""")
  }
}
