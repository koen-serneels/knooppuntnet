import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MarkdownService} from "ngx-markdown";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ApiResponse} from "./kpn/shared/api-response";
import {ChangesPage} from "./kpn/shared/changes-page";
import {ChangeSetPage} from "./kpn/shared/changes/change-set-page";
import {ChangesParameters} from "./kpn/shared/changes/filter/changes-parameters";
import {NetworkChangesPage} from "./kpn/shared/network/network-changes-page";
import {NetworkDetailsPage} from "./kpn/shared/network/network-details-page";
import {NetworkFactsPage} from "./kpn/shared/network/network-facts-page";
import {NetworkMapPage} from "./kpn/shared/network/network-map-page";
import {NetworkNodesPage} from "./kpn/shared/network/network-nodes-page";
import {NetworkRoutesPage} from "./kpn/shared/network/network-routes-page";
import {MapDetailNode} from "./kpn/shared/node/map-detail-node";
import {NodePage} from "./kpn/shared/node/node-page";
import {RouteLeg} from "./kpn/shared/planner/route-leg";
import {PoiPage} from "./kpn/shared/poi-page";
import {MapDetailRoute} from "./kpn/shared/route/map-detail-route";
import {RoutePage} from "./kpn/shared/route/route-page";
import {Statistics} from "./kpn/shared/statistics/statistics";
import {Subset} from "./kpn/shared/subset";
import {SubsetChangesPage} from "./kpn/shared/subset/subset-changes-page";
import {SubsetFactDetailsPage} from "./kpn/shared/subset/subset-fact-details-page";
import {SubsetFactsPageNew} from "./kpn/shared/subset/subset-facts-page-new";
import {SubsetNetworksPage} from "./kpn/shared/subset/subset-networks-page";
import {SubsetOrphanNodesPage} from "./kpn/shared/subset/subset-orphan-nodes-page";
import {SubsetOrphanRoutesPage} from "./kpn/shared/subset/subset-orphan-routes-page";
import {ClientPoiConfiguration} from "./kpn/shared/tiles/client-poi-configuration";

@Injectable()
export class AppService {

  constructor(private http: HttpClient,
              markdownService: MarkdownService) {
    markdownService.renderer.link = (href: string, title: string, text: string) => {
      return "<a href='" + href + "' title='" + title + "'target='_blank'>" + text + "</a>";
    };
  }

  public overview(): Observable<ApiResponse<Statistics>> {
    const url = "/json-api/overview";
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, Statistics.fromJSON))
    );
  }

  public subsetNetworks(subset: Subset): Observable<ApiResponse<SubsetNetworksPage>> {
    const url = this.subsetUrl(subset, "networks");
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, SubsetNetworksPage.fromJSON))
    );
  }

  public subsetFacts(subset: Subset): Observable<ApiResponse<SubsetFactsPageNew>> {
    const url = this.subsetUrl(subset, "facts");
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, SubsetFactsPageNew.fromJSON))
    );
  }

  public subsetFactDetails(subset: Subset /*, fact: Fact*/): Observable<ApiResponse<SubsetFactDetailsPage>> {
    const url = this.subsetUrl(subset, "RouteBroken");
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, SubsetFactDetailsPage.fromJSON))
    );
  }

  public subsetOrphanNodes(subset: Subset): Observable<ApiResponse<SubsetOrphanNodesPage>> {
    const url = this.subsetUrl(subset, "orphan-nodes");
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, SubsetOrphanNodesPage.fromJSON))
    );
  }

  public subsetOrphanRoutes(subset: Subset): Observable<ApiResponse<SubsetOrphanRoutesPage>> {
    const url = this.subsetUrl(subset, "orphan-routes");
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, SubsetOrphanRoutesPage.fromJSON))
    );
  }

  public subsetChanges(subset: Subset /*parameters: ChangesParameters*/): Observable<ApiResponse<SubsetChangesPage>> {
    const url = this.subsetUrl(subset, "changes");
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, SubsetChangesPage.fromJSON))
    );
  }

  public networkDetails(networkId: string): Observable<ApiResponse<NetworkDetailsPage>> {
    const url = "/json-api/network/" + networkId;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, NetworkDetailsPage.fromJSON))
    );
  }

  public networkMap(networkId: string): Observable<ApiResponse<NetworkMapPage>> {
    const url = "/json-api/network-map/" + networkId;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, NetworkMapPage.fromJSON))
    );
  }

  public networkFacts(networkId: string): Observable<ApiResponse<NetworkFactsPage>> {
    const url = "/json-api/network-facts/" + networkId;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, NetworkFactsPage.fromJSON))
    );
  }

  public networkNodes(networkId: string): Observable<ApiResponse<NetworkNodesPage>> {
    const url = "/json-api/network-nodes/" + networkId;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, NetworkNodesPage.fromJSON))
    );
  }

  public networkRoutes(networkId: string): Observable<ApiResponse<NetworkRoutesPage>> {
    const url = "/json-api/network-routes/" + networkId;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, NetworkRoutesPage.fromJSON))
    );
  }

  public networkChanges(networkId: string /*parameters: ChangesParameters*/): Observable<ApiResponse<NetworkChangesPage>> {
    const url = "/json-api/network-changes/" + networkId;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, NetworkChangesPage.fromJSON))
    );
  }

  public node(nodeId: string): Observable<ApiResponse<NodePage>> {
    const url = "/json-api/node/" + nodeId;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, NodePage.fromJSON))
    );
  }

  public route(routeId: string): Observable<ApiResponse<RoutePage>> {
    const url = "/json-api/route/" + routeId;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, RoutePage.fromJSON))
    );
  }

  public changes(parameters: ChangesParameters): Observable<ApiResponse<ChangesPage>> {
    const url = "/json-api/changes";
    return this.http.post(url, parameters).pipe(
      map(response => ApiResponse.fromJSON(response, ChangesPage.fromJSON))
    );
  }

  public changeSet(changeSetId: string, replicationNumber: string): Observable<ApiResponse<ChangeSetPage>> {
    const url = "/json-api/changeset/" + changeSetId + "/" + replicationNumber;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, ChangeSetPage.fromJSON))
    );
  }

  public mapDetailNode(networkType: string /*NetworkType*/, nodeId: string): Observable<ApiResponse<MapDetailNode>> {
    const url = "/json-api/node-detail/" + nodeId + "/" + networkType;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, MapDetailNode.fromJSON))
    );
  }

  public mapDetailRoute(routeId: string): Observable<ApiResponse<MapDetailRoute>> {
    const url = "/json-api/route-detail/" + routeId;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, MapDetailRoute.fromJSON))
    );
  }

  public poiConfiguration(): Observable<ApiResponse<ClientPoiConfiguration>> {
    const url = "/json-api/poi-configuration";
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, ClientPoiConfiguration.fromJSON))
    );
  }

  public poi(elementType: string, elementId: number): Observable<ApiResponse<PoiPage>> {
    const url = "/json-api/poi/" + elementType + "/" + elementId;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, PoiPage.fromJSON))
    );
  }

  public routeLeg(networkType: string, legId: string, sourceNodeId: string, sinkNodeId: string): Observable<ApiResponse<RouteLeg>> {
    const url = "/json-api/leg/" + networkType + "/" + legId + "/" + sourceNodeId + "/" + sinkNodeId;
    return this.http.get(url).pipe(
      map(response => ApiResponse.fromJSON(response, RouteLeg.fromJSON))
    );
  }

  private subsetUrl(subset: Subset, target: string): string {
    return "/json-api/" + target + "/" + subset.country.domain + "/" + subset.networkType.name;
  }

}
