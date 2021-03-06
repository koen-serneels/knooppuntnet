package kpn.server.json

import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.databind.JsonSerializer
import com.fasterxml.jackson.databind.SerializerProvider
import kpn.shared.Fact
import org.springframework.boot.jackson.JsonComponent

@JsonComponent
class FactJsonSerializer extends JsonSerializer[Fact] {
  override def serialize(fact: Fact, jsonGenerator: JsonGenerator, serializerProvider: SerializerProvider): Unit = {
    jsonGenerator.writeString(fact.name)
  }
}
