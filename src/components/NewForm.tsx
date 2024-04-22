import { useState, ChangeEvent } from "react";

interface Props {
  onDone: (name: String, form: String) => {};
}

const NewForm = ({ onDone }: Props) => {
  let formula = "";
  let name = "";

  const changeForm = (event: ChangeEvent<HTMLInputElement>) => {
    formula = event.target.value;
  };

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    name = event.target.value;
  };

  const [finalMsg, changeFinalMsg] = useState("");

  const done = () => {
    if (formula == "") {
      changeFinalMsg("Formula can not be blank!");
      return;
    } else if (name == "") {
      changeFinalMsg("Name can not be blank!");
      return;
    }

    changeFinalMsg("");
    onDone(name, formula);
  };

  return (
    <>
      <h2>Introduce a formula</h2>

      <input
        type="text"
        className="form-control ta-c"
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        onChange={changeName}
        placeholder="Name"
      ></input>

      <input
        type="text"
        className="form-control mm-2 ta-c"
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        onChange={changeForm}
      ></input>

      <h3>{finalMsg}</h3>

      <button
        type="button"
        className="btn btn-outline-info btn-lg btn-block"
        onClick={done}
      >
        Add formula to database
      </button>
    </>
  );
};

export default NewForm;
