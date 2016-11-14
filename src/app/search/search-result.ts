import { Coordinate } from 'openlayers';

export interface SearchResult {
  name: string;
  zoomLevel: number;
  point: Coordinate;
}
