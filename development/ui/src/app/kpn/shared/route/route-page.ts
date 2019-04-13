// this class is generated, please do not modify

import {RouteChangeInfos} from "./route-change-infos";
import {RouteInfo} from "./route-info";
import {RouteReferences} from "./route-references";

export class RoutePage {

  constructor(readonly route: RouteInfo,
              readonly references: RouteReferences,
              readonly routeChangeInfos: RouteChangeInfos) {
  }

  public static fromJSON(jsonObject): RoutePage {
    if (!jsonObject) {
      return undefined;
    }
    return new RoutePage(
      RouteInfo.fromJSON(jsonObject.route),
      RouteReferences.fromJSON(jsonObject.references),
      RouteChangeInfos.fromJSON(jsonObject.routeChangeInfos)
    );
  }
}
