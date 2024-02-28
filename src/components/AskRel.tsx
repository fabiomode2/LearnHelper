import { useState } from "react";
import { DataCard, SimpleRelation } from "./types";
import { ShuffleList } from "./utils";

interface Props {
  data: DataCard;
}

interface question {
  pregunta: string;
  opciones: string[];
  respuesta: string;
}

const GetRandomItem = (lista: SimpleRelation[]) => {
  return lista[Math.floor(Math.random() * lista.length)];
};

export const AskRel = ({ data }: Props) => {
  const [CurrentQuestion, changeCurrentQuestion] = useState<question>();
  const [alreadyResponded, changeAlreadyResponded] = useState(true);
  const [finalMessage, changeFinalMessage] = useState("Get Asked");

  const keepgoing = () => {
    changeAlreadyResponded(false);
    changeCurrentQuestion(GetQuestion());
  };

  const GetQuestion = () => {
    const item = GetRandomItem(data.data);
    let answers = [item.men];
    while (true) {
      let i = GetRandomItem(data.data);
      if (!(answers.indexOf(i.men) > -1)) {
        answers.push(i.men);
        if (answers.length > 2) {
          break;
        }
      }
    }

    answers = ShuffleList(answers);
    const resultado: question = {
      pregunta: `Qué significa ${item.exp}?`,
      opciones: answers,
      respuesta: item.men,
    };
    return resultado;
  };

  const Answer = (respuesta: string) => {
    changeAlreadyResponded(true);
    if (respuesta == CurrentQuestion?.respuesta) {
      changeFinalMessage("✅Correct!✅");
    } else {
      changeFinalMessage("❌Incorrect❌");
    }
  };

  return (
    <div className="align-items-center justify-content-center">
      <div className="row">
        <h1>{data.name}</h1>
      </div>
      <div className="row">
        <h5>{CurrentQuestion?.pregunta}</h5>
      </div>
      <div className="row align-items-center justify-content-center">
        {CurrentQuestion?.opciones.map((value) => {
          return (
            <button
              type="button"
              className="btn btn-info w-25 m-4"
              onClick={() => Answer(value)}
              key={value}
            >
              {value}
            </button>
          );
        })}
      </div>

      {alreadyResponded ? (
        <>
          <h3>{finalMessage}</h3>
          <div className="row align-items-center justify-content-center p-5">
            <button
              type="button"
              className="btn btn-success w-25"
              onClick={keepgoing}
            >
              Next question
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AskRel;
