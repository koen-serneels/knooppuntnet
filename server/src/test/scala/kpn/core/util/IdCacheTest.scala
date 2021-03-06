package kpn.core.util

import org.scalatest.FunSuite
import org.scalatest.Matchers

import scala.collection.JavaConverters._

class IdCacheTest extends FunSuite with Matchers {

  test("LinkedHashMap stores values in access order, and automatically removes oldest entries") {

    val map = new java.util.LinkedHashMap[Long, Unit](100, 0.7f, true) {
      override def removeEldestEntry(e: java.util.Map.Entry[Long, Unit]): Boolean = {
        this.size > 3
      }
    }

    map.put(1, Unit)
    map.put(2, Unit)
    map.put(3, Unit)
    map.put(4, Unit)

    map.keySet().asScala should equal(Set(2, 3, 4))

    map.put(5, Unit)
    map.keySet().asScala should equal(Set(3, 4, 5))

    map.get(3L)

    map.put(6, Unit)
    map.keySet().asScala should equal(Set(3, 5, 6))
  }

  test("caching Long's") {

    val cache = new IdCache(3)

    cache.contains(1L) should equal(false)

    cache.put(1L)
    cache.contains(1L) should equal(true)

    cache.put(2L)
    cache.put(3L)
    cache.put(4L)

    // 1 was the oldest entry, and has been removed from the cache
    cache.contains(1L) should equal(false)

    // by accessing 2, 2 is not the oldest entry anymore now, 3 is becoming the oldest entry
    cache.contains(2L) should equal(true)

    cache.put(5L)

    // oldest entry 3 has been removed
    cache.contains(3L) should equal(false)

    cache.contains(2L) should equal(true)
    cache.contains(4L) should equal(true)
    cache.contains(5L) should equal(true)
  }
}
