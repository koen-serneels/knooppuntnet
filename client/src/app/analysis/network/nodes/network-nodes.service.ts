import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {FilterOptions} from "../../../kpn/filter/filter-options";

@Injectable()
export class NetworkNodesService {
  readonly filterOptions: BehaviorSubject<FilterOptions> = new BehaviorSubject(FilterOptions.empty());
}
