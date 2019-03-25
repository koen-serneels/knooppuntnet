import {Component, Input} from '@angular/core';

@Component({
  selector: 'kpn-page-menu-option',
  template: `
    <a [ngClass]="{'selected': selectedPageName === pageName}" [routerLink]="link">
      {{pageTitle}}
      <span *ngIf="elementCount != null" class="element-count"> ({{elementCount}})</span>
    </a>
  `,
  styles: [`

    .selected {
      color: rgba(0, 0, 0, 0.87);
      font-weight: bold;
    }

    .element-count {
      color: gray;
      font-weight: normal;
    }

  `]
})
export class PageMenuOptionComponent {

  @Input() pageName: string;
  @Input() selectedPageName: string;
  @Input() link: string;
  @Input() pageTitle: string;
  @Input() elementCount: number;

}