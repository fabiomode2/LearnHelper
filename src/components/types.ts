export interface Relation {
    key: number;
    expression: string;
    meaning: string;
  }

export  interface DataCard {
    name: string;
    reldata: SimpleRelation[];
    textdata: string;
    type: string;
  }
  
export  interface SimpleRelation {
    exp: string;
    men: string;
  }

export interface StoredDataType{
  type : "relation" | "text" | "formula"
}

export const ItemTypes = {
  CARD: 'card',
}


export interface Formula{
  formula : String,
  name: String
}