package kpn.planner.repository;

import org.springframework.stereotype.Repository;

import kpn.planner.domain.poi.Poi;
import kpn.planner.domain.poi.PoiElement;
import kpn.planner.config.Databases;

@Repository
public class PoiRepositoryImpl implements PoiRepository {

	private final Databases databases;

	public PoiRepositoryImpl(Databases databases) {
		this.databases = databases;
	}

	public Poi getPoi(String type, String poiId) {
		String id = "poi:" + type + ":" + poiId;
		return databases.getPois().get(PoiElement.class, id).getPoi();
	}
}