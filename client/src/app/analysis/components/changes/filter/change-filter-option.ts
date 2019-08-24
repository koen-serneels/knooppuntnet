import {List} from "immutable";
import {ChangesFilterPeriod} from "../../../../kpn/shared/changes/filter/changes-filter-period";

export class ChangeFilterOption {
  constructor(readonly level: string,
              readonly period: ChangesFilterPeriod,
              readonly options: List<ChangeFilterOption>,
              readonly impactedCountClicked: () => void,
              readonly totalCountClicked: () => void) {
  }
}
