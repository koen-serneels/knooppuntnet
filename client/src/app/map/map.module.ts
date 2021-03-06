import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatRadioModule
} from "@angular/material";
import {OlModule} from "../components/ol/ol.module";
import {SharedModule} from "../components/shared/shared.module";
import {PdfModule} from "../pdf/pdf.module";
import {MapRoutingModule} from "./map-routing.module";
import {MapPageComponent} from "./pages/map/_map-page.component";
import {MapDetailDefaultComponent} from "./pages/map/map-detail-default.component";
import {MapDetailNodeComponent} from "./pages/map/map-detail-node.component";
import {MapDetailRouteComponent} from "./pages/map/map-detail-route.component";
import {MapMainPageComponent} from "./pages/map/map-main-page.component";
import {MapPoiConfigComponent} from "./pages/map/poi/map-poi-config.component";
import {PoiConfigComponent} from "./pages/map/poi/poi-config.component";
import {PoiGroupAmenityComponent} from "./pages/map/poi/poi-group-amenity.component";
import {PoiGroupFoodshopsComponent} from "./pages/map/poi/poi-group-foodshops.component";
import {PoiGroupHikingBikingComponent} from "./pages/map/poi/poi-group-hiking-biking.component";
import {PoiGroupLandmarksComponent} from "./pages/map/poi/poi-group-landmarks.component";
import {PoiGroupPlacesToStayComponent} from "./pages/map/poi/poi-group-places-to-stay.component";
import {PoiGroupRestaurantsComponent} from "./pages/map/poi/poi-group-restaurants.component";
import {PoiGroupShopsComponent} from "./pages/map/poi/poi-group-shops.component";
import {PoiGroupSportsComponent} from "./pages/map/poi/poi-group-sports.component";
import {PoiGroupTourismComponent} from "./pages/map/poi/poi-group-tourism.component";
import {PoiGroupComponent} from "./pages/map/poi/poi-group.component";
import {PoiNamesComponent} from "./pages/map/poi/poi-names.component";
import {PlannerService} from "./planner.service";
import {MapSidebarComponent} from "./sidebar/_map-sidebar.component";
import {ExportDialogComponent} from "./sidebar/export-dialog.component";
import {MapSidebarAnalysisComponent} from "./sidebar/map-side-bar-analysis.component";
import {MapSidebarAppearanceComponent} from "./sidebar/map-side-bar-appearance.component";
import {MapSidebarLegendComponent} from "./sidebar/map-side-bar-legend.component";
import {MapSidebarPlannerComponent} from "./sidebar/map-side-bar-planner.component";
import {MapSidebarPoiConfigurationComponent} from "./sidebar/map-side-bar-poi-configuration.component";
import {PlanCompactComponent} from "./sidebar/plan-compact.component";
import {PlanDetailedComponent} from "./sidebar/plan-detailed.component";
import {PlanInstructionCommandComponent} from "./sidebar/plan-instruction-command.component";
import {PlanInstructionComponent} from "./sidebar/plan-instruction.component";
import {PlanInstructionsComponent} from "./sidebar/plan-instructions.component";
import {PlanTranslationsComponent} from "./sidebar/plan-translations.component";
import {PlanComponent} from "./sidebar/plan.component";
import {PoiDetailComponent} from "./sidebar/poi-detail.component";
import {PlanDistanceComponent} from "./sidebar/plan-distance.component";

@NgModule({
  imports: [
    CommonModule,
    MatRadioModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatExpansionModule,
    MatDividerModule,
    MapRoutingModule,
    SharedModule,
    OlModule,
    PdfModule
  ],
  declarations: [
    MapPageComponent,
    MapMainPageComponent,
    MapSidebarComponent,
    MapSidebarPlannerComponent,
    MapSidebarAnalysisComponent,
    MapSidebarLegendComponent,
    MapSidebarAppearanceComponent,
    MapSidebarPoiConfigurationComponent,
    MapDetailDefaultComponent,
    MapDetailNodeComponent,
    MapDetailRouteComponent,
    MapPoiConfigComponent,
    PoiGroupComponent,
    PoiGroupAmenityComponent,
    PoiGroupFoodshopsComponent,
    PoiGroupPlacesToStayComponent,
    PoiGroupRestaurantsComponent,
    PoiGroupShopsComponent,
    PoiGroupSportsComponent,
    PoiGroupTourismComponent,
    PoiGroupHikingBikingComponent,
    PoiGroupLandmarksComponent,
    PoiConfigComponent,
    PoiNamesComponent,
    PoiDetailComponent,
    PlanInstructionComponent,
    PlanInstructionCommandComponent,
    PlanComponent,
    PlanDistanceComponent,
    PlanCompactComponent,
    PlanDetailedComponent,
    PlanInstructionsComponent,
    ExportDialogComponent,
    PlanTranslationsComponent
  ],
  exports: [
    MapPageComponent
  ],
  providers: [
    PlannerService
  ],
  entryComponents: [
    ExportDialogComponent
  ]
})
export class MapModule {
}
