import {Component, Input, OnInit} from "@angular/core";
import {MatCheckboxChange} from "@angular/material";
import {List} from "immutable";
import Layer from "ol/layer";

@Component({
  selector: "kpn-layer-switcher",
  template: `
    <div class="switcher">
      <div *ngIf="open" (mouseleave)="closePanel()">
        <div *ngFor="let layer of namedLayers">
          <mat-checkbox
            (click)="$event.stopPropagation();"
            [checked]="isVisible(layer)"
            (change)="layerChanged(layer, $event)">
            {{layerName(layer)}}
          </mat-checkbox>
        </div>
      </div>
      <div *ngIf="!open" (mouseenter)="openPanel()" (mouseleave)="closePanel()">
        <img [src]="'/assets/images/layers.png'" alt="layers">
      </div>
    </div>
  `,
  styles: [`

    .switcher {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 100;
      background-color: white;
      padding: 5px;
      border-color: lightgray;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
    }

    .switcher-panel {
      width: 180px;
    }

  `]
})
export class LayerSwitcherComponent implements OnInit {

  @Input() layers: List<Layer>;
  namedLayers: List<Layer>;

  open: boolean = false;

  ngOnInit() {
    this.namedLayers = this.layers.filter(layer => layer.get("name"));
  }

  openPanel(): void {
    this.open = true;
  }

  closePanel(): void {
    this.open = false;
  }

  toggleOpen(): void {
    this.open = !this.open;
  }

  isVisible(layer: Layer): boolean {
    return layer.getVisible();
  }

  layerChanged(layer: Layer, event: MatCheckboxChange): void {
    layer.setVisible(event.checked);
  }

  layerName(layer: Layer): string {
    return layer.get("name");
  }

}
