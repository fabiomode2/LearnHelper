import update from "immutability-helper";
import type { FC } from "react";
import { useCallback, useState } from "react";

import { Card } from "./DragableCard";

const style = {
  width: 400,
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cardss: Item[];
}

export const Container: FC<ContainerState> = ({ cardss }) => {
  {
    const [cards, setCards] = useState<Item[]>(cardss);
    console.log(cardss);

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      );
    }, []);

    const renderCard = useCallback((card: Item, index: number) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    }, []);

    return (
      <>
        <li style={style} className="listitem">
          {cards.map((card, i) => renderCard(card, i))}
        </li>
      </>
    );
  }
};
