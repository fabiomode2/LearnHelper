import { ChangeEvent, useState } from "react";

interface Props {
  closeable: boolean;
  kkey: number;
  onChange: (expression: string, relation: string, kkey: number) => void;
}

export const NewRelRow = ({ closeable, onChange, kkey }: Props) => {
  const [expression, changeExpression] = useState("");
  const [meaning, changeMeaning] = useState("");
  const [existir, cambiarEstado] = useState(true);

  const handleExpression = (event: ChangeEvent<HTMLInputElement>) => {
    changeExpression(event.target.value);
    onChange(event.target.value, meaning, kkey);
  };

  const handleMeaning = (event: ChangeEvent<HTMLInputElement>) => {
    changeMeaning(event.target.value);
    onChange(expression, event.target.value, kkey);
  };

  if (!existir) {
    onChange("", "", kkey);
    return;
  }
  return (
    <>
      <div className="row relational-row ">
        <div className="d-flex align-items-center justify-content-center">
          <input
            className="relational-input w-25"
            type="text"
            placeholder="expression"
            aria-label="default input example"
            name="expression"
            value={expression}
            onChange={handleExpression}
          />
          <div className="mx-2">→</div>
          <input
            className="relational-input w-25"
            type="text"
            placeholder="meaning"
            aria-label="default input example"
            name="meaning"
            value={meaning}
            onChange={handleMeaning}
          />
          {closeable && (
            <button
              className="mx-2 btn btn-danger"
              onClick={() => cambiarEstado(false)}
            >
              ❌
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NewRelRow;
