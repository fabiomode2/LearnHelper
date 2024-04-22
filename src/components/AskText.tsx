import { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { seleccionarFrases } from "./utils";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Container, Item } from "./DropableContainer";

interface Props {
  text: string;
}

const AskText = ({ text }: Props) => {
  const text_dividido = text.split(".");

  let frases_seleccionadas: string[] = [];

  const [cardItems, changeCardItems] = useState<Item[]>([]);

  const [clueSentences, changeClueSentences] = useState<String[]>([
    "Primera frase",
    "Ultima frase",
  ]);
  const [sentecesToOrder, ChangeSentecesToOrder] = useState<String[]>([]);
  const [alreadyAsked, changeAlreadyAsked] = useState(true);

  const verificarRespuestas = () => {};

  const generarPregunta = () => {
    const nuevasFrases = seleccionarFrases(text_dividido);
    changeClueSentences([nuevasFrases[0], nuevasFrases[-1]]);
    frases_seleccionadas = nuevasFrases.slice(1, 4);

    console.log(frases_seleccionadas);

    let lista: Item[] = [];
    sentecesToOrder.map((item, index) => {
      let a: Item = { id: index, text: item.toString() };
      lista.push(a);
    });

    changeCardItems(lista);
  };

  return (
    <>
      <div className="flex-column">
        <ol className="">
          <li className="listitem">
            <p className="raleway-f coolp">{clueSentences[0]}</p>
          </li>

          <DndProvider backend={HTML5Backend}>
            <Container cardss={cardItems} />
          </DndProvider>

          <li className="listitem">
            <p className="raleway-f coolp">{clueSentences[1]}</p>
          </li>
        </ol>
      </div>

      {alreadyAsked ? (
        <>
          <button
            type="button"
            className="btn btn-warning"
            onClick={generarPregunta}
          >
            Next Question
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="btn btn-info"
            onClick={verificarRespuestas}
          >
            Check Answers
          </button>
        </>
      )}
    </>
  );
};

export default AskText;
