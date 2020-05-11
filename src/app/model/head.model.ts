export interface RootObject {
  ID: string;
  DBTime: string;
  Title: string;
  Link: string;
  Target: string;
  W: string;
  ClassOPT: string;
  Children?: Child2[];
}

export interface Child2 {
  ID: string;
  DBTime: string;
  Title: string;
  Link: string;
  Target: string;
  W: string;
  ClassOPT: string;
  Children?: Child[];
}

export interface Child {
  ID: string;
  DBTime: string;
  Title: string;
  Link: string;
  Target: string;
  W: string;
  ClassOPT: string;
}
