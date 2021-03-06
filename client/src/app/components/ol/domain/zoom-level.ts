export class ZoomLevel {

  static readonly bitmapTileMinZoom = 6;
  static readonly bitmapTileMaxZoom = 11;

  static readonly vectorTileMinZoom = 12;
  static readonly vectorTileMaxZoom = 15;
  static readonly vectorTileMaxOverZoom = 20;

  static readonly minZoom: number = Math.min(
    ZoomLevel.bitmapTileMinZoom,
    ZoomLevel.vectorTileMinZoom
  );

  static readonly maxZoom: number = Math.max(
    ZoomLevel.bitmapTileMaxZoom,
    ZoomLevel.vectorTileMaxZoom,
    ZoomLevel.vectorTileMaxOverZoom
  );

}
