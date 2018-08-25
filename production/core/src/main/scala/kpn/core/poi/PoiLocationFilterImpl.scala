package kpn.core.poi

import kpn.core.engine.analysis.country.CountryAnalyzer
import kpn.shared.Country
import kpn.shared.LatLon

class PoiLocationFilterImpl(countryAnalyzer: CountryAnalyzer) extends PoiLocationFilter {

  /*
    Returns true if given a point-of-interest at given location should be
    included in the database. Any poi in The Netherlands or Belgium is included.
    For Germany only pois are included from the area whithin Germany where there
    are actually node networks.
  */
  def filter(latLon: LatLon): Boolean = {
    val x = latLon.lon
    val y = latLon.lat
    if (PoiLocation.germanyBoundingBox.contains(x, y)) {
      true
    }
    else {
      val countries = countryAnalyzer.countries(latLon)
      countries.contains(Country.nl) || countries.contains(Country.be)
    }
  }
}
