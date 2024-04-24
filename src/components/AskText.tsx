import { useState } from "react";
import { seleccionarFrases, ShuffleList } from "./utils";

interface Props {
  text: string;
}

const AskText = ({ text }: Props) => {
  const text_dividido = text.split(".");

  let frases_seleccionadas: string[] = [];

  const [fraseCorrecta, changeFraseCorrecta] = useState("");
  const [clueSentences, changeClueSentences] = useState<String[]>([
    "Primera frase",
    "Ultima frase",
  ]);
  const [alreadyAsked, changeAlreadyAsked] = useState(true);
  const [frasesASeleccionar, changeFrasesASeleccionar] = useState<String[]>([]);
  const [fraseFinal, ChangeFraseFinal] = useState("");

  const verificarRespuestas = (frase: String) => {
    changeAlreadyAsked(true);

    if (frase == fraseCorrecta) {
      ChangeFraseFinal("✅Correct!✅");
    } else {
      ChangeFraseFinal("❌Incorrect❌");
    }
  };

  const generarPregunta = () => {
    changeAlreadyAsked(false);
    ChangeFraseFinal("");

    const nuevasFrases = seleccionarFrases(text_dividido);

    console.log("cambiando frases..");

    changeClueSentences([nuevasFrases[1], nuevasFrases[3]]);
    frases_seleccionadas = ShuffleList([
      nuevasFrases[0],
      nuevasFrases[2],
      nuevasFrases[4],
    ]);
    changeFraseCorrecta(nuevasFrases[2]);
    changeFrasesASeleccionar(frases_seleccionadas);
  };

  return (
    <>
      <div className="flex-column">
        <ol className="">
          <li className="listitem">
            <p className="raleway-f coolp">{clueSentences[0]}</p>
          </li>

          <li className="listitem">
            <p className="raleway-f coolp">?</p>
          </li>

          <li className="listitem">
            <p className="raleway-f coolp">{clueSentences[1]}</p>
          </li>
        </ol>
      </div>

      <div className="flex-row">
        {frasesASeleccionar.map((item, index) => (
          <>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => verificarRespuestas(item)}
              key={index}
            >
              {item}
            </button>
          </>
        ))}
      </div>

      <h3 className="mm-2">{fraseFinal}</h3>

      {alreadyAsked && (
        <>
          <button
            type="button"
            className="btn btn-warning"
            onClick={generarPregunta}
          >
            Next Question
          </button>
        </>
      )}
    </>
  );
};

export default AskText;
