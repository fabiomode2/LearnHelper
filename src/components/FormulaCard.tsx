interface Props {
  title: string;
  onClick: () => void;
}

export const FormulaCard = ({ title, onClick }: Props) => {
  //style="width: 18rem;"
  return (
    <>
      <div className="card m-2">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              onClick();
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
