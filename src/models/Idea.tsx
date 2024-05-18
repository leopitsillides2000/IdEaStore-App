import { Author } from "./Author";

export interface Idea {
  uuid: string;
  author: Author;
  title: string;
  summary: string;
  description: string;
  created: Date;
  updated: Date;
}
