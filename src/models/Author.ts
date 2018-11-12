import { Book } from "./Book";

export interface Author {
  id: String;

  name: String;

  books?: Book[];
}
