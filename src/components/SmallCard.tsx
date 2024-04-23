import { DataCard } from "./types";

interface Props {
  title: string;
  onClick: (type: string, data: DataCard) => void;
  data: DataCard;
  type: string;
}

export const SmallCard = ({ title, onClick, data, type }: Props) => {
  //style="width: 18rem;"

  let texto = "Ask me!";
  if (type == "Setting") texto = "Borrar Datos Almacenados";
  return (
    <>
      <div className="card m-2">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{data.type}</p>
          <button
            className="btn btn-outline-info"
            onClick={() => {
              onClick(type, data);
            }}
          >
            {texto}
          </button>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
