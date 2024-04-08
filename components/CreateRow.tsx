import Iformula from "../images/formula.png";
import Irelation from "../images/relation.svg";
import Itext from "../images/text.svg";
import Card from "./Card";

interface Props {
  somethingCreated: (type: string) => void;
}

export const CreateRow = ({ somethingCreated }: Props) => {
  return (
    <>
      <div className="row">
        <Card
          img={Iformula}
          title="Formula"
          text="Create"
          onClick={() => {
            somethingCreated("formula");
          }}
        />
        <Card
          img={Irelation}
          title="Relation"
          text="Create"
          onClick={() => {
            somethingCreated("relation");
          }}
        />
        <Card
          img={Itext}
          title="Text"
          text="Create"
          onClick={() => {
            somethingCreated("text");
          }}
        />
      </div>
    </>
  );
};

export default CreateRow;
