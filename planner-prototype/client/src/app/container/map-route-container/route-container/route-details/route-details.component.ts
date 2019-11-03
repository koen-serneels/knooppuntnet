import {Component, Input, OnInit} from "@angular/core";
import {Route, RouteState, Section} from "../../../../model/";
import {RouteDetailsService} from "../../../../service";

@Component({
  selector: "app-route-details",
  templateUrl: "./route-details.component.html",
  styleUrls: ["./route-details.component.scss"]
})
export class RouteDetailsComponent implements OnInit {

  @Input() routeState: RouteState;
  route: Route;
  meters: number;

  nodeSectionMapper: { name: string, sections: Section[] }[] = [];

  constructor(private routeDetailsService: RouteDetailsService) {
  }

  ngOnInit() {
    this.routeDetailsService.routeObservable.subscribe((route: Route) => {
      this.route = route;
      if (this.route !== null) {
        let total = 0;

        route.sections.forEach((section) => {
          total += section.meters;
        });

        this.meters = total;
        this.initializeMapper();
      }
    });
  }

  deleteSection(name: string) {
    this.routeState.deleteSection(name);
    this.routeDetailsService.updateRoute(this.routeState);
  }

  private initializeMapper() {
    if (this.route !== null && this.routeState.selectedRoute.selectedNamesByUser.length >= 2) {
      this.nodeSectionMapper = [];
      for (let i = 0; i < this.routeState.selectedRoute.selectedNamesByUser.length; i++) {
        const startName = this.routeState.selectedRoute.selectedNamesByUser[i];
        const endName = this.routeState.selectedRoute.selectedNamesByUser[i + 1];

        const index = this.route.sections.indexOf(this.route.sections.find(x => x.startNode === startName && x.endNode === endName));

        if (index > -1) {
          this.nodeSectionMapper.push({name: startName, sections: [this.route.sections[index]]});
        } else {
          const beginRoute = this.route.sections.indexOf(this.route.sections.find(x => x.startNode === startName));
          const endRoute = this.route.sections.indexOf(this.route.sections.find(x => x.endNode === endName));

          const sections = [];
          for (let j = beginRoute; j <= endRoute; j++) {
            sections.push(this.route.sections[j]);
          }

          this.nodeSectionMapper.push({name: startName, sections: sections});
        }
      }
    }
  }
}