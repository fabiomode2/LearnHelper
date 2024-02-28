import { DataCard } from "./types";

interface Props {
  title: string;
  onClick: (data: DataCard) => void;
  data: DataCard;
}

export const SmallCard = ({ title, onClick, data }: Props) => {
  //style="width: 18rem;"
  return (
    <>
      <div className="card w-25">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <button
            className="btn btn-info"
            onClick={() => {
              onClick(data);
            }}
          >
            Ask me!
          </button>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
