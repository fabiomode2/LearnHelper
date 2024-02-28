import { DataCard } from "./types";

interface Props {
  data: DataCard;
}

export const AskRel = ({ data }: Props) => {
  return (
    <>
      <div className="">{data.name}</div>
    </>
  );
};

export default AskRel;
