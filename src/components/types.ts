export interface Relation {
    key: number;
    expression: string;
    meaning: string;
  }

export  interface DataCard {
    name: string;
    data: SimpleRelation[];
    type: string;
  }
  
export  interface SimpleRelation {
    exp: string;
    men: string;
  }

export interface StoredDataType{
  type : "relation" | "text" | "formula"
}