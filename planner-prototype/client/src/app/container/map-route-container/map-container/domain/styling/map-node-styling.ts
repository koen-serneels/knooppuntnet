import {Injectable} from "@angular/core";
import Style from "ol/style/Style";
import Circle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Text from "ol/style/Text";
import Stroke from "ol/style/Stroke";
import {MapStylingColors} from "./map-styling-colors";
import {MapState} from "../map-state";
import Feature from "ol/Feature";

@Injectable()
export class MapNodeStyling {

  constructor(private mapState: MapState) {
  }

  private readonly largeMinZoomLevel = 13;

  private readonly smallNodeSelectedStyle = this.nodeSelectedStyle(8);
  private readonly largeNodeSelectedStyle = this.nodeSelectedStyle(20);
  private readonly smallNodeStyle = this.initSmallNodeStyle();
  private readonly largeNodeStyle = this.initLargeNodeStyle();

  public nodeStyle(zoom: number, feature: Feature, enabled: boolean): Style[] {

    const featureId = feature.get("id");
    const layer = feature.get("layer");
    const large = zoom >= this.largeMinZoomLevel;

    const selectedStyle = this.determineNodeSelectedStyle(featureId, large);
    const style = this.determineNodeMainStyle(feature, layer, enabled, large);

    return selectedStyle ? [selectedStyle, style] : [style];
  }

  private determineNodeSelectedStyle(featureId: string, large: boolean): Style {
    let style = null;
    if (this.mapState.selectedNodeId && featureId && featureId == this.mapState.selectedNodeId) {
      if (large) {
        style = this.largeNodeSelectedStyle;
      } else {
        style = this.smallNodeSelectedStyle;
      }
    }
    return style;
  }

  private determineNodeMainStyle(feature: Feature, layer: string, enabled: boolean, large: boolean): Style {
    let style: Style = null;
    if (large) {
      style = this.determineLargeNodeStyle(feature, layer, enabled);
    } else {
      style = this.determineSmallNodeStyle(layer, enabled);
    }
    return style;
  }

  private determineLargeNodeStyle(feature: Feature, layer: string, enabled: boolean): Style {

    const color = this.nodeColor(layer, enabled);

    this.largeNodeStyle.getText().setText(feature.get("name"));
    this.largeNodeStyle.getImage().getStroke().setColor(color);

    if (this.mapState.highlightedNodeId && feature.get("id") == this.mapState.highlightedNodeId) {
      this.largeNodeStyle.getImage().getStroke().setWidth(5);
      this.largeNodeStyle.getImage().setRadius(16);
    } else {
      this.largeNodeStyle.getImage().getStroke().setWidth(3);
      this.largeNodeStyle.getImage().setRadius(14);
    }
    return this.largeNodeStyle;
  }

  private initSmallNodeStyle(): Style {
    return new Style({
      image: new Circle({
        radius: 3,
        fill: new Fill({
          color: MapStylingColors.white
        }),
        stroke: new Stroke({
          color: MapStylingColors.green,
          width: 2
        })
      })
    });
  }

  private initLargeNodeStyle(): Style {
    return new Style({
      image: new Circle({
        radius: 14,
        fill: new Fill({
          color: MapStylingColors.white
        }),
        stroke: new Stroke({
          color: MapStylingColors.green,
          width: 3
        })
      }),
      text: new Text({
        text: "",
        textAlign: "center",
        textBaseline: "middle",
        font: "14px Arial, Verdana, Helvetica, sans-serif",
        stroke: new Stroke({
          color: MapStylingColors.white,
          width: 5
        })
      })
    })
  }

  private determineSmallNodeStyle(layer: string, enabled: boolean): Style {
    let color = this.nodeColor(layer, enabled);
    this.smallNodeStyle.getImage().getStroke().setColor(color);
    return this.smallNodeStyle;
  }

  private nodeSelectedStyle(radius: number) {
    return new Style({
      image: new Circle({
        radius: radius,
        fill: new Fill({
          color: MapStylingColors.yellow
        })
      })
    });
  }

  private nodeColor(layer: string, enabled: boolean) {
    let nodeColor = MapStylingColors.gray;
    if (enabled) {
      if ("error-node" == layer) {
        nodeColor = MapStylingColors.blue;
      } else if ("orphan-node" == layer) {
        nodeColor = MapStylingColors.darkGreen;
      } else if ("error-orphan-node" == layer) {
        nodeColor = MapStylingColors.darkBlue;
      } else {
        nodeColor = MapStylingColors.green;
      }
    }
    return nodeColor;
  }

  public static selectedNodeStyle(name: string): Style {
    return new Style({
      image: new Circle({
        radius: 18,
        fill: new Fill({
          color: MapStylingColors.red
        }),
        stroke: new Stroke({
          color: MapStylingColors.green,
          width: 6
        })
      }),
      text: new Text({
        text: name,
        textAlign: "center",
        textBaseline: "middle",
        font: "14px Arial, Verdana, Helvetica, sans-serif",
        stroke: new Stroke({
          color: MapStylingColors.white,
          width: 5
        })
      })
    })
  }

}