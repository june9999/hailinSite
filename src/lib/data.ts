export interface fileInfo {
  size: number;
  type: string;
  name: string;
  lastModified: number;
  arrayBuffer: () => Promise<ArrayBuffer>;
}

export interface hasUrl {
  url: string;
}

export interface formInfo {
  name: string | undefined;
  material: string | undefined;
  addedYear: number | undefined;
  size: string | undefined;
  img: string | undefined;
}
