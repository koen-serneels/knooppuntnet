import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MatDialogModule, MatDividerModule, MatIconModule, MatPaginatorModule, MatSlideToggleModule, MatSortModule, MatTableModule} from "@angular/material";
import {MarkdownModule} from "ngx-markdown";
import {SharedModule} from "../../components/shared/shared.module";
import {AnalysisComponentsModule} from "../components/_analysis-components.module";
import {FactModule} from "../fact/_fact.module";
import {NetworkRoutingModule} from "./_network-routing.module";
import {NetworkChangesPageComponent} from "./changes/_network-changes-page.component";
import {NetworkChangeSetComponent} from "./changes/network-change-set.component";
import {NetworkChangeComponent} from "./changes/network-change.component";
import {NetworkChangesSidebarComponent} from "./changes/network-changes-sidebar.component";
import {NetworkChangesService} from "./changes/network-changes.service";
import {NetworkPageHeaderComponent} from "./components/network-page-header.component";
import {NetworkDetailsPageComponent} from "./details/_network-details-page.component";
import {NetworkDetailsComponent} from "./details/network-details.component";
import {NetworkSummaryComponent} from "./details/network-summary.component";
import {NetworkFactsPageComponent} from "./facts/_network-facts-page.component";
import {NetworkFactChecksComponent} from "./facts/network-fact-checks.component";
import {NetworkFactHeaderComponent} from "./facts/network-fact-header.component";
import {NetworkFactNodeIdsComponent} from "./facts/network-fact-node-ids.component";
import {NetworkFactNodesComponent} from "./facts/network-fact-nodes.component";
import {NetworkFactRelationIdsComponent} from "./facts/network-fact-relation-ids.component";
import {NetworkFactRoutesComponent} from "./facts/network-fact-routes.component";
import {NetworkFactWayIdsComponent} from "./facts/network-fact-way-ids.component";
import {NetworkFactComponent} from "./facts/network-fact.component";
import {NetworkMapPageComponent} from "./map/_network-map-page.component";
import {NetworkNodesPageComponent} from "./nodes/_network-nodes-page.component";
import {IntegrityIndicatorDialogComponent} from "./nodes/indicators/integrity-indicator-dialog.component";
import {IntegrityIndicatorComponent} from "./nodes/indicators/integrity-indicator.component";
import {NetworkIndicatorDialogComponent} from "./nodes/indicators/network-indicator-dialog.component";
import {NetworkIndicatorComponent} from "./nodes/indicators/network-indicator.component";
import {NodeConnectionIndicatorDialogComponent} from "./nodes/indicators/node-connection-indicator-dialog.component";
import {NodeConnectionIndicatorComponent} from "./nodes/indicators/node-connection-indicator.component";
import {RoleConnectionIndicatorDialogComponent} from "./nodes/indicators/role-connection-indicator-dialog.component";
import {RoleConnectionIndicatorComponent} from "./nodes/indicators/role-connection-indicator.component";
import {RouteIndicatorDialogComponent} from "./nodes/indicators/route-indicator-dialog.component";
import {RouteIndicatorComponent} from "./nodes/indicators/route-indicator.component";
import {NetworkNodeAnalysisComponent} from "./nodes/network-node-analysis.component";
import {NetworkNodeRoutesComponent} from "./nodes/network-node-routes.component";
import {NetworkNodeTableComponent} from "./nodes/network-node-table.component";
import {NetworkNodesSidebarComponent} from "./nodes/network-nodes-sidebar.component";
import {NetworkNodesService} from "./nodes/network-nodes.service";
import {NetworkRoutesPageComponent} from "./routes/_network-routes-page.component";
import {RouteAccessibleIndicatorDialogComponent} from "./routes/indicators/route-accessible-indicator-dialog.component";
import {RouteAccessibleIndicatorComponent} from "./routes/indicators/route-accessible-indicator.component";
import {RouteConnectionIndicatorDialogComponent} from "./routes/indicators/route-connection-indicator-dialog.component";
import {RouteConnectionIndicatorComponent} from "./routes/indicators/route-connection-indicator.component";
import {RouteInvestigateIndicatorDialogComponent} from "./routes/indicators/route-investigate-indicator-dialog.component";
import {RouteInvestigateIndicatorComponent} from "./routes/indicators/route-investigate-indicator.component";
import {NetworkRouteAnalysisComponent} from "./routes/network-route-analysis.component";
import {NetworkRouteTableComponent} from "./routes/network-route-table.component";
import {NetworkRoutesSidebarComponent} from "./routes/network-routes-sidebar.component";
import {NetworkRoutesService} from "./routes/network-routes.service";

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    SharedModule,
    AnalysisComponentsModule,
    NetworkRoutingModule,
    MatSlideToggleModule,
    FactModule
  ],
  declarations: [
    NetworkChangesPageComponent,
    NetworkDetailsPageComponent,
    NetworkSummaryComponent,
    NetworkFactsPageComponent,
    NetworkMapPageComponent,
    NetworkNodesPageComponent,
    NetworkNodesSidebarComponent,
    NetworkNodeTableComponent,
    NetworkNodeAnalysisComponent,
    NetworkNodeRoutesComponent,
    NetworkRoutesPageComponent,
    NetworkRoutesSidebarComponent,
    NetworkRouteTableComponent,
    NetworkRouteAnalysisComponent,
    NetworkPageHeaderComponent,
    NetworkChangeComponent,
    IntegrityIndicatorComponent,
    IntegrityIndicatorDialogComponent,
    NetworkIndicatorComponent,
    NetworkIndicatorDialogComponent,
    NodeConnectionIndicatorComponent,
    NodeConnectionIndicatorDialogComponent,
    RoleConnectionIndicatorComponent,
    RoleConnectionIndicatorDialogComponent,
    RouteIndicatorComponent,
    RouteIndicatorDialogComponent,
    RouteAccessibleIndicatorComponent,
    RouteAccessibleIndicatorDialogComponent,
    RouteConnectionIndicatorComponent,
    RouteConnectionIndicatorDialogComponent,
    RouteInvestigateIndicatorComponent,
    RouteInvestigateIndicatorDialogComponent,
    NetworkChangeSetComponent,
    NetworkDetailsComponent,
    NetworkFactChecksComponent,
    NetworkFactHeaderComponent,
    NetworkFactNodeIdsComponent,
    NetworkFactWayIdsComponent,
    NetworkFactRelationIdsComponent,
    NetworkFactNodesComponent,
    NetworkFactRoutesComponent,
    NetworkFactComponent,
    NetworkChangesSidebarComponent
  ],
  entryComponents: [
    NodeConnectionIndicatorDialogComponent,
    IntegrityIndicatorDialogComponent,
    NetworkIndicatorDialogComponent,
    RoleConnectionIndicatorDialogComponent,
    RouteIndicatorDialogComponent,
    RouteAccessibleIndicatorDialogComponent,
    RouteConnectionIndicatorDialogComponent,
    RouteInvestigateIndicatorDialogComponent,
  ],
  providers: [
    NetworkChangesService,
    NetworkNodesService,
    NetworkRoutesService
  ]
})
export class NetworkModule {
}
