import {Component} from "@angular/core";

@Component({
  selector: "kpn-base-sidebar",
  template: `
    <kpn-sidebar>
      <kpn-sidebar-version-warning></kpn-sidebar-version-warning>
    </kpn-sidebar>
  `
})
export class BaseSidebarComponent {
}
