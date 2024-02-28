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
  const [alreadyResponded, changeAlreadyResponded] = useState(false);
  const [finalMessage, changeFinalMessage] = useState("");

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

  changeCurrentQuestion(GetQuestion());
  return (
    <>
      <div className="row">
        <h1>{data.name}</h1>
      </div>
      <div className="row">{CurrentQuestion?.pregunta}</div>
      <div className="row">
        {CurrentQuestion?.opciones.map((value) => {
          return (
            <button
              type="button"
              className="btn btn-info"
              onClick={() => Answer(value)}
              key={value}
            >
              {value}
            </button>
          );
        })}
      </div>
      (
      {alreadyResponded ? (
        <>
          <div className="col">
            {finalMessage}
            <button
              type="button"
              className="btn btn-success"
              onClick={keepgoing}
            >
              Continue
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
      )
    </>
  );
};

export default AskRel;
