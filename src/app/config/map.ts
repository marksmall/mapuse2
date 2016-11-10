export interface Layer {
  type: string;
  url: string;
  attributions: string[];
  sublayers: string[];
  format: string;
  opacity: number;
}

export interface MapConfig {
  id: string;
  extent: number[];
  resolutions: number[];
  center: [number, number];
  crs: any;
  layers: Layer[];
}
