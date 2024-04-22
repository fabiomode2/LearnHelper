//Implementacion de una relation para testeo mientras no implemento el almacenamiento de datos en el navegador
// let dc: DataCard = {
//   name: "Numeros en Ingles",
//   data: [
//     { exp: "one", men: "1" },
//     { exp: "two", men: "2" },
//     { exp: "three", men: "3" },
//     { exp: "four", men: "4" },
//     { exp: "five", men: "5" },
//     { exp: "six", men: "6" },
//     { exp: "seven", men: "7" },
//     { exp: "eight", men: "8" },
//     { exp: "nine", men: "9" },
//     { exp: "ten", men: "10" },
//   ],
//   type: "relation",
// };

import "./App.css";
import MainBoard from "./components/MainBoard";
import CreateRow from "./components/CreateRow";
import NewRel from "./components/NewRel";
import Page from "./components/Page";
import { CloseButton } from "./components/CloseButton";
import { useState } from "react";
import { Formula, Relation } from "./components/types";
import SmallCard from "./components/SmallCard";
import { SimpleRelation, DataCard } from "./components/types";
import AskRel from "./components/AskRel";
import AskText from "./components/AskText";
import NewText from "./components/NewText";
import NewForm from "./components/NewForm";
import FormulaCard from "./components/FormulaCard";
import Formulas from "./components/Formulas";

function App() {
  const [AllData, changeAllData] = useState<DataCard[]>([]);
  const [FormulaData, changeFormulaData] = useState<Formula[]>([
    { name: "Ec. 2º Grado", formula: "x = 2a−b ± sqrt(b^2−4ac)" },
    { name: "Área del rectángulo", formula: "A = l × w" },
    { name: "Área del triángulo", formula: "A = 1/2 × b × h" },
    { name: "Área del círculo", formula: "A = π × r^2" },
    { name: "Volumen del cubo", formula: "V = s^3" },
    { name: "Volumen del prisma rectangular", formula: "V = A_base × h" },
  ]);

  localStorage.clear();

  const [MainTabVisibility, changeMainTabVisibility] = useState(true);

  const [createFormVisibility, changeFormVisibility] = useState(false);
  const [NewRelVisibility, changeRelVisibility] = useState(false);
  const [createTextVisibility, changeTextVisibility] = useState(false);

  const [AskRelVisibility, changeAskRelVisibility] = useState(false);
  const [AskRelC, changeAskRelC] = useState(<></>);

  const [AskTextVisibility, changeAskTextVisibility] = useState(false);
  const [AskTextC, changeAskTextC] = useState(<></>);

  const [viewFormulasVisibility, changeViewFormulasVisibility] =
    useState(false);

  const secondarys = [
    changeRelVisibility,
    changeTextVisibility,
    changeFormVisibility,
    changeAskRelVisibility,
    changeAskTextVisibility,
    changeViewFormulasVisibility,
  ];

  if (localStorage.getItem("data") != null) {
    changeAllData(JSON.parse(localStorage.getItem("data")!));
  }

  const StoredClicked = (type: string, data: DataCard) => {
    if (type == "relation") {
      changeMainTabVisibility(false);
      secondarys.map((item) => item(false));

      //

      changeAskRelC(<AskRel data={data} max_options={3} key={"unique"} />);
      changeAskRelVisibility(true);
    } else if (type == "text") {
      changeMainTabVisibility(false);
      secondarys.map((item) => item(false));

      //

      changeAskTextC(<AskText text={data.textdata} key={"unique2"} />);
      changeAskTextVisibility(true);
    }
  };

  const ViewForms = () => {
    changeMainTabVisibility(false);
    secondarys.map((item) => item(false));
    changeViewFormulasVisibility(true);
  };

  const TextDone = (text: string) => {
    changeTextVisibility(false);
    changeMainTabVisibility(true);

    let name = text.substring(0, 9) + "...";
    let type = "text";

    // Add the data to de "database"
    let variable: DataCard = {
      name: name,
      reldata: [{ exp: "not relation", men: "not relation" }],
      textdata: text,
      type: type,
    };

    //Add input data to saved
    let temp = AllData;
    temp.push(variable);
    changeAllData(temp);

    localStorage.setItem("data", JSON.stringify(AllData));
  };

  const FormDone = (name: String, formula: String) => {
    changeFormVisibility(false);
    changeMainTabVisibility(true);

    let form: Formula = {
      name: name,
      formula: formula,
    };

    let temp = FormulaData;
    temp.push(form);
    changeFormulaData(temp);

    //No añado formulas a la database porque da bastante igual

    // localStorage.setItem("form", JSON.stringify(FormulaData));
    // console.log("data: ", localStorage.getItem("data"));
  };

  const RelDone = (array: Relation[]) => {
    //Hide rel show main
    // console.log(array);
    changeRelVisibility(false);
    changeMainTabVisibility(true);
    //Get and format data
    let dataFormated: SimpleRelation[] = [];
    array.map((item) => {
      if (item.expression != "" && item.meaning != "") {
        dataFormated.push({ exp: item.expression, men: item.meaning });
      }
    });
    //Get name
    let name = "";
    array.map((item) => {
      if (item.key == -1) {
        name = item.expression;
      }
    });
    // Add the data to de "database"
    let variable: DataCard = {
      name: name,
      reldata: dataFormated,
      textdata: "",
      type: "relation",
    };

    //Add input data to saved
    let temp = AllData;
    temp.push(variable);
    changeAllData(temp);

    localStorage.setItem("data", JSON.stringify(AllData));
    console.log("data: ", localStorage.getItem("data"));
  };

  const Manager = (type: string) => {
    changeMainTabVisibility(false);

    console.log(type);

    if (type == "formula") {
      changeFormVisibility(true);
    } else if (type == "relation") {
      changeRelVisibility(true);
    } else if (type == "text") {
      changeTextVisibility(true);
    }
    // else if (type == "askRel") {
    //   changeGetAsked(true);
    // }
    else {
      changeMainTabVisibility(true);
      secondarys.map((item) => item(false));
    }
  };

  return (
    <>
      <MainBoard>
        <Page visible={MainTabVisibility}>
          <h1 className="p-5">Learn Helper</h1>
          <CreateRow somethingCreated={Manager} />
          <hr />
          <FormulaCard title="Formulas" onClick={ViewForms} />
          {/* GRID */}
          <div className="grid-class">
            {/* ITEM GRID */}
            {AllData.map((item, index) => (
              <div className="grid-item" key={index}>
                <SmallCard
                  key={index}
                  title={item.name}
                  onClick={StoredClicked}
                  data={item}
                  type={item.type}
                />
              </div>
            ))}
            {/* END GRID */}
          </div>
        </Page>
        <Page visible={viewFormulasVisibility}>
          <CloseButton onClick={Manager} />
          <Formulas data={FormulaData} />
        </Page>
        <Page visible={createFormVisibility}>
          <CloseButton onClick={Manager} />
          <NewForm onDone={FormDone} />
        </Page>
        <Page visible={NewRelVisibility}>
          <CloseButton onClick={Manager} />
          <NewRel onDone={RelDone} />
        </Page>
        <Page visible={createTextVisibility}>
          <CloseButton onClick={Manager} />
          <NewText onDone={TextDone} />
        </Page>
        <Page visible={AskRelVisibility}>
          {AskRelC}
          <CloseButton onClick={Manager} />
        </Page>
        <Page visible={AskTextVisibility}>
          {AskTextC}
          <CloseButton onClick={Manager} />
        </Page>
      </MainBoard>
    </>
  );
}

export default App;
