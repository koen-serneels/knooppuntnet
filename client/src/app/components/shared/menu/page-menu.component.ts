import {Component} from "@angular/core";

@Component({
  selector: "kpn-page-menu",
  template: `
    <div class="menu">
      <ng-content></ng-content>
    </div>
    <mat-divider></mat-divider>
  `,
  styles: [`

    mat-divider {
      margin-bottom: 50px;
    }

    .menu {
      line-height: 30px;
    }

    /deep/ .menu :not(:last-child):after {
      content: " | ";
      padding-left: 5px;
      padding-right: 5px;
    }
  `]

})
export class PageMenuComponent {
}
