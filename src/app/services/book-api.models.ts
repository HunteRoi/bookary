export interface Creator {
  role: string;
  name: string;
}

export interface Binding {
  _name: string;
  name: string;
}

export interface Units {
  _name: string;
  name: string;
}

export interface Height {
  units: Units;
  value: number;
}

export interface Length {
  units: Units;
  value: number;
}

export interface Width {
  units: Units;
  value: number;
}

export interface Dimension {
  height: Height;
  length: Length;
  width: Width;
}

export interface ApiBook {
  id: string;
  isbn10: string;
  ean: string;
  title: string;
  authors: string[];
  creators?: Creator[];
  editor: string;
  image?: string;
  pages?: any;
  year?: number;
  collection?: any;
  binding?: Binding;
  listPrice?: number;
  category?: string;
  resume?: string;
  url?: string;
  dimension?: Dimension;
  weight?: number;
}

export interface ApiResult {
  [key: string]: ApiBook[];
}

export interface ApiResponse {
  idsAsked: string[];
  results: ApiResult;
}
