// here is the typerscript check

export interface WorkInfo {
  name: string;
  material: string;
  addedYear: number;
  size: string;
  imgUrl: string;
  [key: string]: string | number;
}

export interface User {
  name: string;
  password: string;
}
