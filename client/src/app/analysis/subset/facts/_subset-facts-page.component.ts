import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../../app.service";
import {PageService} from "../../../components/shared/page.service";
import {Util} from "../../../components/shared/util";
import {ApiResponse} from "../../../kpn/shared/api-response";
import {FactCountNew} from "../../../kpn/shared/fact-count-new";
import {Subset} from "../../../kpn/shared/subset";
import {SubsetFactsPageNew} from "../../../kpn/shared/subset/subset-facts-page-new";
import {SubsetCacheService} from "../../../services/subset-cache.service";
import {Subscriptions} from "../../../util/Subscriptions";
import {flatMap, map, tap} from "rxjs/operators";

@Component({
  selector: "kpn-subset-facts-page",
  template: `

    <kpn-subset-page-header-block
      [subset]="subset"
      pageName="facts"
      pageTitle="Facts"
      i18n-pageTitle="@@subset-facts.title">
    </kpn-subset-page-header-block>

    <div *ngIf="response">
      <p>
        <kpn-situation-on [timestamp]="response.situationOn"></kpn-situation-on>
      </p>
      <div *ngIf="!hasFacts()">
        <i>No facts</i>
      </div>
      <div *ngIf="hasFacts()">
        <kpn-items>
          <kpn-item *ngFor="let factCount of response.result.factCounts; let i=index" index="{{i}}">
            <a [routerLink]="factDetailLink(factCount)">
              <kpn-fact-name [factName]="factCount.factName"></kpn-fact-name>
            </a>
            ({{factCount.count}})
            <p>
              <kpn-fact-description [factName]="factCount.factName"></kpn-fact-description>
            </p>
          </kpn-item>
        </kpn-items>
      </div>
      <kpn-json [object]="response"></kpn-json>
    </div>
  `
})
export class SubsetFactsPageComponent implements OnInit, OnDestroy {

  private readonly subscriptions = new Subscriptions();

  subset: Subset;
  response: ApiResponse<SubsetFactsPageNew>;

  constructor(private activatedRoute: ActivatedRoute,
              private appService: AppService,
              private pageService: PageService,
              private subsetCacheService: SubsetCacheService) {
  }

  ngOnInit() {
    this.pageService.initSubsetPage();
    this.subscriptions.add(
      this.activatedRoute.params.pipe(
        map(params => Util.subsetInRoute(params)),
        tap(subset => this.processSubset(subset)),
        flatMap(subset => this.appService.subsetFacts(subset))
      ).subscribe(response => this.processResponse(response))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  hasFacts() {
    return this.response && this.response.result && this.response.result.subsetInfo.factCount > 0;
  }

  factDetailLink(factCount: FactCountNew): String {
    return "/analysis/" + this.subset.key() + "/" + factCount.factName;
  }

  private processSubset(subset: Subset) {
    this.subset = subset;
    this.pageService.subset = subset;
  }

  private processResponse(response: ApiResponse<SubsetFactsPageNew>) {
    this.response = response;
    this.subsetCacheService.setSubsetInfo(this.subset.key(), this.response.result.subsetInfo)
  }

}