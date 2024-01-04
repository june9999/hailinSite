export interface FileInfo {
  size: number;
  type: string;
  name: string;
  lastModified: number;
  arrayBuffer: () => Promise<ArrayBuffer>;
}

export interface hasUrl {
  url: string;
}
