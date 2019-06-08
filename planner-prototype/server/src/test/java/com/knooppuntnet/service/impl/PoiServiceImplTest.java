package com.knooppuntnet.service.impl;

import static org.junit.Assert.assertEquals;

import org.ektorp.DocumentNotFoundException;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.knooppuntnet.domain.poi.Poi;

@RunWith(SpringRunner.class)
@SpringBootTest(properties = "spring.config.location=file:/kpn/conf/planner.properties")
public class PoiServiceImplTest {

	@Rule
	public ExpectedException expectedException = ExpectedException.none();

	@Autowired
	private PoiServiceImpl poiService;

	@Test
	public void testGetPoiInformation() {
		Poi poi = this.poiService.getPoiInformation("way", "50610511");

		assertEquals(poi.getElementType(), "way");
		assertEquals(poi.getElementId(), Long.valueOf(50610511));
		assertEquals(poi.getLatitude(), Double.valueOf(51.4626506));
		assertEquals(poi.getLongitude(), Double.valueOf(4.4514157));
		//assertEquals(poi.getLayers().get(0), "heritage");
	}

	@Test
	public void testGetPoiInformationWithWrongArguments() {
		expectedException.expect(DocumentNotFoundException.class);
		Poi poi = this.poiService.getPoiInformation("invalid", "50610511");
	}
}
