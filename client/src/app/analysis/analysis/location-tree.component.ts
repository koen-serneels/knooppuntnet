import {FlatTreeControl} from "@angular/cdk/tree";
import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../app.service";
import {Countries} from "../../kpn/common/countries";
import {Subscriptions} from "../../util/Subscriptions";
import {LocationNode, locations} from "./locations";

interface LocationFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: "kpn-location-tree",
  template: `
    <div>
      <button mat-stroked-button>Expand all</button>
      <button mat-stroked-button>Collapse all</button>
      <mat-radio-group>
        <mat-radio-button
          value="0"
          title="All"
          class="col-level-0">All
        </mat-radio-button>
        <mat-radio-button
          value="11"
          title="In use only"
          class="col-level-11">In use only
        </mat-radio-button>
      </mat-radio-group>
    </div>

    <mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
      <mat-tree-node *matTreeNodeDef="let leafNode" matTreeNodePadding>
        <a (click)="select(leafNode.name)">{{leafNode.name}}</a><span class="node-count">(123)</span>
      </mat-tree-node>
      <mat-tree-node *matTreeNodeDef="let expandableNode;when: hasChild" matTreeNodePadding>
        <div mat-icon-button matTreeNodeToggle
             [attr.aria-label]="'toggle ' + expandableNode.name">
          <mat-icon svgIcon="expand" *ngIf="treeControl.isExpanded(expandableNode)" class="expand-collapse-icon"></mat-icon>
          <mat-icon svgIcon="collapse" *ngIf="!treeControl.isExpanded(expandableNode)" class="expand-collapse-icon"></mat-icon>
        </div>
        <a (click)="select(expandableNode.name)">{{expandableNode.name}}</a><span class="node-count">(123)</span>
      </mat-tree-node>
    </mat-tree>
  `,
  styles: [`
    /deep/ .expand-collapse-icon > svg {
      width: 12px;
      height: 12px;
      vertical-align: top;
      padding-top: 7px;
    }

    .node-count {
      padding-left: 20px;
      color: gray;
    }
  `]
})
export class LocationTreeComponent implements OnInit, OnDestroy {

  @Input() country;
  @Output() selection = new EventEmitter<string>();

  private readonly subscriptions = new Subscriptions();

  private _transformer = (node: LocationNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: this.extractName(node.name),
      level: level,
    };
  };

  treeControl = new FlatTreeControl<LocationFlatNode>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: LocationFlatNode) => node.expandable;

  constructor(private activatedRoute: ActivatedRoute,
              private appService: AppService) {
  }

  ngOnInit() {
    var countryIndex = 0;
    if (this.country.domain === Countries.nl.domain) {
      countryIndex = 0;
    } else if (this.country.domain === Countries.be.domain) {
      countryIndex = 1;
    } else if (this.country.domain === Countries.de.domain) {
      countryIndex = 2;
    } else if (this.country.domain === Countries.fr.domain) {
      countryIndex = 3;
    }
    this.dataSource.data = locations[countryIndex].children;
    // this.subscriptions.add(
    //   this.activatedRoute.params.pipe(
    //     map(params => {
    //       return params["networkType"];
    //     }),
    //     flatMap(networkType => this.appService.location(networkType))
    //   ).subscribe(response => this.refs = response.result.routeRefs)
    // );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  select(locationName: string): void {
    this.selection.emit(locationName);
  }

  private extractName(name: string): string {
    return name.split("/")[1].split("_")[0];
  }

}
