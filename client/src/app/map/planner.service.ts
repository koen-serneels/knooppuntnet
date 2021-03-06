import {Injectable} from "@angular/core";
import {Map as TranslationMap} from "immutable";
import Map from "ol/Map";
import {AppService} from "../app.service";
import {PlannerCommandStack} from "./planner/commands/planner-command-stack";
import {PlannerContext} from "./planner/context/planner-context";
import {PlannerCrosshairImpl} from "./planner/context/planner-crosshair-impl";
import {PlannerCursorImpl} from "./planner/context/planner-cursor-impl";
import {PlannerElasticBandImpl} from "./planner/context/planner-elastic-band-impl";
import {PlannerLegRepositoryImpl} from "./planner/context/planner-leg-repository-impl";
import {PlannerRouteLayerImpl} from "./planner/context/planner-route-layer-impl";
import {PlannerEngine} from "./planner/interaction/planner-engine";
import {PlannerEngineImpl} from "./planner/interaction/planner-engine-impl";
import {PlanLegCache} from "./planner/plan/plan-leg-cache";

@Injectable({
  providedIn: "root"
})
export class PlannerService {

  constructor(private appService: AppService) {
  }

  private translations: TranslationMap<string, string> = null;

  private commandStack = new PlannerCommandStack();
  private routeLayer = new PlannerRouteLayerImpl();
  private crosshair = new PlannerCrosshairImpl();
  private cursor = new PlannerCursorImpl();
  private elasticBand = new PlannerElasticBandImpl();
  private legRepository = new PlannerLegRepositoryImpl(this.appService);
  private legCache: PlanLegCache = new PlanLegCache();

  context: PlannerContext = new PlannerContext(
    this.commandStack,
    this.routeLayer,
    this.crosshair,
    this.cursor,
    this.elasticBand,
    this.legRepository,
    this.legCache
  );

  engine: PlannerEngine = new PlannerEngineImpl(this.context);

  init(map: Map): void {
    this.cursor.addToMap(map);
    this.crosshair.addToMap(map);
    this.routeLayer.addToMap(map);
    this.elasticBand.addToMap(map);
  }

  updateTranslationRegistry(translationElements: HTMLCollection) {
    if (this.translations === null) {
      const keysAndValues: Array<[string, string]> = [];
      Array.from(translationElements).forEach(span => {
        const id = span.getAttribute("id");
        const translation = span.textContent;
        keysAndValues.push([id, translation]);
      });
      this.translations = TranslationMap<string, string>(keysAndValues);
    }
  }

  isTranslationRegistryUpdated() {
    return this.translations != null;
  }

  translate(key: string): string {
    if (this.translations == null) {
      return "";
    }
    return this.translations.get(key);
  }

}
