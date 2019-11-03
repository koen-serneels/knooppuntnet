import {Component} from "@angular/core";

@Component({
  selector: "kpn-analysis-de-page",
  template: `

    <div>
      <a routerLink="/" i18n="@@breadcrumb.home">Home</a> >
      <a routerLink="/analysis" i18n="@@breadcrumb.analysis">Analysis</a> >
      <ng-container i18n="@@country.de">Germany</ng-container>
    </div>

    <kpn-page-header i18n="@@country.de">Germany</kpn-page-header>

    <kpn-icon-button
      routerLink="/analysis/de/cycling/networks"
      icon="cycling"
      text="Cycling"
      i18n-text="@@network-type.cycling">
    </kpn-icon-button>

    <kpn-icon-button
      routerLink="/analysis/de/hiking/networks"
      icon="hiking"
      text="Hiking"
      i18n-text="@@network-type.hiking">
    </kpn-icon-button>

  `
})
export class AnalysisDePageComponent {
}