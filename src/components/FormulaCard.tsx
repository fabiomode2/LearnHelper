import { Formula } from "./types";

interface Props {
  title: string;
  onClick: (data: Formula[]) => void;
  data: Formula[];
}

export const FormulaCard = ({ title, onClick, data }: Props) => {
  //style="width: 18rem;"
  return (
    <>
      <div className="card m-2">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              onClick(data);
            }}
          >
            Check Formulas
          </button>
        </div>
      </div>
    </>
  );
};

export default FormulaCard;
