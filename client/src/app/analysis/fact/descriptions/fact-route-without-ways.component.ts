import {Component} from "@angular/core";

@Component({
  selector: "kpn-fact-route-without-ways",
  template: `
    <p i18n="@@fact.description.route-without-ways">
      The route does not contain any ways (we expect the route to contain at least 1 way).
    </p>
  `
})
export class FactRouteWithoutWaysComponent {
}
