import {Component, Input} from "@angular/core";
import {InterpretedTags} from "../../../components/shared/tags/interpreted-tags";
import {WayInfo} from "../../../kpn/shared/diff/way-info";
import {RouteChangeInfo} from "../../../kpn/shared/route/route-change-info";

@Component({
  selector: "kpn-route-change-way-added",
  template: `
    <div>
      <span i18n="@@route-change.way-added.title">Added way</span>
      <kpn-osm-link-way [wayId]="wayInfo.id" [title]="wayInfo.id.toString()"></kpn-osm-link-way>
    </div>

    <div *ngIf="isWayChangedInThisChangeset(wayInfo)" class="kpn-detail">
      <div class="kpn-thin">
        [ v{{wayInfo.version}} <i i18n="@@route-change.way-added.this-changeset">this changeset</i>]
      </div>
    </div>

    <div *ngIf="!isWayChangedInThisChangeset(wayInfo)" class="kpn-detail">
      <div class="kpn-thin">
        <kpn-meta-data [metaData]="wayInfo"></kpn-meta-data>
      </div>
    </div>

    <div class="kpn-detail">
      <kpn-tags-table [tags]="wayTags(wayInfo)"></kpn-tags-table>
    </div>
  `
})
export class RouteChangeWayAddedComponent {

  @Input() wayInfo: WayInfo;
  @Input() routeChangeInfo: RouteChangeInfo;

  wayTags(wayInfo: WayInfo): InterpretedTags {
    return InterpretedTags.all(wayInfo.tags);
  }

  isWayChangedInThisChangeset(wayInfo: WayInfo): boolean {
    return wayInfo.changeSetId == this.routeChangeInfo.changeKey.changeSetId;
  }

}
