package kpn.core.db.views

import kpn.core.db.json.JsonFormats.routeSummaryFormat
import kpn.shared.RouteSummary
import spray.json.DeserializationException
import spray.json.JsArray
import spray.json.JsBoolean
import spray.json.JsNumber
import spray.json.JsString
import spray.json.JsValue

object OrphanRouteView extends View {

  case class OrphanRouteKey(ignored: Boolean, orphan: Boolean, display: Boolean, country: String, networkType: String, id: Long)

  def toKeyAndValue(rowValue: JsValue): (OrphanRouteKey, RouteSummary) = {
    val row = toRow(rowValue)
    val key = row.key match {
      case JsArray(Vector(JsBoolean(ignored), JsBoolean(orphan), JsBoolean(display), JsString(country), JsString(networkType), JsNumber(id))) =>
        OrphanRouteKey(ignored, orphan, display, country, networkType, id.toLong)
      case _ =>
        throw DeserializationException("key structure expected")
    }
    val value = routeSummaryFormat.read(row.value)
    (key, value)
  }

  def convert(rowValue: JsValue): RouteSummary = {
    val row = toRow(rowValue)
    routeSummaryFormat.read(row.value)
  }

  def toObjectId(rowValue: JsValue): Long = {
    val rowObject = rowValue.asJsObject
    rowObject.getFields("key").head match {
      case JsArray(values) =>
        values(5) match {
          case JsNumber(id) => id.toLong
          case _ => throw DeserializationException("expected number")
        }
      case _ => throw DeserializationException("expected key array")
    }
  }

  override val reduce: Option[String] = Some("_count")
}