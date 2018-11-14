import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {AppService} from "../../../app.service";
import {NodePage} from "../../../kpn/shared/node/node-page";
import {ApiResponse} from "../../../kpn/shared/api-response";

@Component({
  selector: 'kpn-node-page',
  template: `
    <kpn-page>
      <kpn-toolbar toolbar></kpn-toolbar>
      <kpn-sidenav sidenav></kpn-sidenav>
      <div content>
        <div *ngIf="response?.result">
          <div *ngIf="!response.result">
            <h1>Node not found</h1>
          </div>
          <div *ngIf="response.result">

            <h1>Node {{nodeInfo.name}}</h1>

            <!--
			UiPageContents(
			-->

            <kpn-data title="Summary"> <!-- "Samenvatting" -->
              <node-summary [nodeInfo]="nodeInfo"></node-summary>
            </kpn-data>

            <kpn-data title="Situation on"> <!-- "Situatie op" -->
              <timestamp [timestamp]="response.situationOn"></timestamp>
            </kpn-data>

            <kpn-data title="Last updated"> <!-- "Laatst bewerkt" -->
              <timestamp [timestamp]="nodeInfo.lastUpdated"></timestamp>
            </kpn-data>

            <kpn-data title="Tags"> <!-- "Labels" -->
              <tags [tags]="nodeInfo.tags"></tags>
            </kpn-data>

            <kpn-data title="Networks"> <!-- "Netwerken" -->
              <node-networks [networks]="references.networkReferences"></node-networks>
            </kpn-data>

            <kpn-data title="Routes"> <!-- "Routes" -->
              <node-routes [routes]="references.routeReferences"></node-routes>
            </kpn-data>

            <kpn-data title="Facts"> <!-- "Feiten" -->
              xxx
              <!--
				UiFacts(page.nodeInfo.facts)
			  -->
            </kpn-data>

            <!--
			  TagMod.when(PageWidth.isVeryLarge) {
				UiEmbeddedMap(new NodeMap(page.nodeInfo))
			  },
			  UiNodeChanges(page.nodeChanges)
			  )
			-->

            <kpn-link-login></kpn-link-login>

            <json [object]="response"></json>
          </div>
        </div>
      </div>
    </kpn-page>
  `
})
export class NodePageComponent implements OnInit, OnDestroy {

  response: ApiResponse<NodePage>;
  paramsSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private appService: AppService) {
  }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe(params => {
      const nodeId = params['nodeId'];
      this.appService.node(nodeId).subscribe(response => {
        this.response = response;
      });
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  get nodeInfo() {
    return this.response.result.nodeInfo;
  }

  get references() {
    return this.response.result.references;
  }

}