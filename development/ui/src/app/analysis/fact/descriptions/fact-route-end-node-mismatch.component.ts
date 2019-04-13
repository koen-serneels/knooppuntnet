import {Component} from "@angular/core";

@Component({
  selector: "kpn-fact-route-end-node-mismatch",
  template: `
    <ng-container i18n="@@fact.description.route-end-node-mismatch">
      The end node does not match the last node in the last way.
    </ng-container>
  `
})
export class FactRouteEndNodeMismatchComponent {
}
