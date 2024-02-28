export interface Relation {
    key: number;
    expression: string;
    meaning: string;
  }

export  interface DataCard {
    name: string;
    data: SimpleRelation[];
  }
  
export  interface SimpleRelation {
    exp: string;
    men: string;
  }