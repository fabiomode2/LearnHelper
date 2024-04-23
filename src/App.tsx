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
  const [AllData, changeAllData] = useState<DataCard[]>([
    {
      name: "Phrasal Verbs 1",
      reldata: [
        { exp: "rushed off our feet", men: "andar con prisa" },
        { exp: "dead-end job", men: "traballo sin promoción" },
        { exp: "learn the ropes", men: "aprender os gajes do oficio" },
        { exp: "go on strike", men: "facer folga" },
        { exp: "pulling your weight", men: "facer o que che toca" },
        { exp: "get paid peanuts", men: "pouca paga" },
      ],
      textdata: "",
      type: "relation",
    },
    {
      name: "Phrasal Verbs 2",
      reldata: [
        { exp: "caught red handed", men: "pillado" },
        { exp: "under the table", men: "polo calado" },
        {
          exp: "cracking down on",
          men: "empeñarse",
        },
        { exp: "mend my ways", men: "arreglar meu comportamento" },
        { exp: "get away with murder", men: "salirse coa sua" },
        { exp: "a steal", men: "unha ganga" },
      ],
      textdata: "",
      type: "relation",
    },
    {
      name: "English Vocab",
      reldata: [
        { exp: "dump", men: "vertedero" },
        { exp: "crop", men: "cosecha" },
        { exp: "fossil fuel", men: "combustible fósil" },
        { exp: "hazardous", men: "peligroso" },
        { exp: "endangered", men: "en peligro de extinción" },
        { exp: "flooding", men: "inundación" },
        { exp: "melt", men: "derretir" },
        { exp: "knock down", men: "derribar" },
        { exp: "ash", men: "ceniza" },
        { exp: "annoying", men: "molesto" },
        { exp: "seabed", men: "fondo marino" },
        { exp: "leak", men: "fuga" },
        { exp: "thaw", men: "descongelar" },
        { exp: "moisture", men: "humedad" },
        { exp: "trample", men: "pisotear" },
        { exp: "landfill", men: "vertedero" },
        { exp: "average", men: "promedio" },
      ],
      textdata: "",
      type: "relation",
    },
    {
      name: "Filosofía",
      reldata: [
        {
          exp: "materialismo histórico",
          men: "teoría de Marx que postula que las condiciones materiales de vida determinan la estructura social y cultural",
        },
        {
          exp: "voluntad de poder",
          men: "concepto de Nietzsche que sugiere que el impulso básico de los seres humanos es buscar el poder y la dominación",
        },
        {
          exp: "dialéctica",
          men: "método filosófico de Hegel que describe el proceso de cambio a través de la confrontación de opuestos",
        },
        {
          exp: "imperativo categórico",
          men: "principio ético de Kant que establece que una acción es moralmente correcta si se puede aplicar universalmente sin contradicción",
        },
        {
          exp: "idea del bien",
          men: "concepto de Platón que representa la forma suprema de la realidad, que es la fuente de todo conocimiento y moralidad",
        },
        {
          exp: "ciudad de Dios",
          men: "obra de Santo Agustín que trata sobre la relación entre la ciudad terrenal y la ciudad celestial",
        },
      ],
      textdata: "",
      type: "relation",
    },
    {
      name: "Texto de Nietzsche",
      reldata: [],
      textdata:
        "Crítica do nihilismo. O nihilismo como estado psicolóxico ten aínda unha terceira e derradeira forma.Dados estes dous recoñecementos, que co devir nada se obtén e que non hai unidade que rexa o devir, na cal osingular poida subsumirse completamente como nun elemento do máis alto valor: non queda máis saída quecondenar como fraude todo este mundo do devir e imaxinar un mundo que queda alén daquel, en cantomundo verdadeiro. Mais non ben o home vai tras el, como queira que ese mundo está construído apenas denecesidades psicolóxicas e para iso carece de todo dereito, xorde así a derradeira forma do nihilismo, a cal secifra na falta de fe nun mundo metafísico –que se prohibe a crenza nun mundo verdadeiro. Chegados a estepunto cómpre admitir a realidade do devir como única realidade, fica vedado calquera tipo de camiño ocultoaos transmundos e falsas divindades – mais non se atura este mundo que xa nin queremos negar… ―No fondoque sucedeu? Chegamos ao sentimento de ausencia de valor cando comprendemos que non é lícito interpretaro carácter total da existencia nin co concepto de “fin”, nin co concepto de “unidade”, nin co concepto de“verdade”. Con eles non se obtén nin se acada nada; a multiplicidade do acontecer carece dunha unidade que atranscenda: o carácter do existir non é “verdadeiro”, é falso…, non hai xa absolutamente ningunha razón paranon quitar da cabeza a idea dun mundo verdadeiro… En suma: retiramos agora as categorías “fin”, “unidade”,“ser”, coas que nós engadimos un valor ao mundo – e agora o mundo aparece sen valor…",
      type: "text",
    },
    {
      name: "Guerra de Sucesión",
      reldata: [],
      textdata:
        "Carlos II, o último rei español austria, morre no 1700 sen sucesión. No seu testamento deixaba a Filipe de Anjou (Borbón) como sucesor, fronte á opción de continuidade dinástica representada por Carlos de Habsburgo. O nomeamento de Filipe V como rei provoca un conflicto internacional e unha guerra civil, conflitos coñecidos como Guerra de Sucesión (1702). A Guerra europea: Grande Alianza (Inglaterra, Holanda, Habsburgo, Portugal e Savoia) contra os Borbóns de Francia e España. Pelexábase pola hexemonía dinástica e o dominio marítimo e colonial. Este conflicto escondía os desexos de expansión de Luís XIV, o interese británico por manter a posición privilexiada de España e as expectativas conquistadoras dos Habsburgo sobre os Países Baixos. Os ingleses conquistan Xibraltar no 1704, e o arquiduque Carlos foi recoñecido rei de España no 1705. Pola morte do emperador austríaco, Carlos convertíase no herdeiro do Imperio. A partir das batallas de Almansa e Villaviciosa a guerra inclinouse a favor das tropas francoespañolas.A Guerra Civil: España dividiuse en 2 bandos enfrontados, a Coroa de Castela, que apoiaba a Filipe de Borbón, e a Coroa de Aragón, que apoiaba a Carlos de Austria.Isto obedeceu a diversas causas:Por parte da Coroa de Castela, ás maiores dificultades da poboación, derivadas da crise do reinado de Carlos II.Por parte da Coroa de Aragón, á forte competencia comercial con Francia e o receo cara o absolutismo francés.O conflito adquiriu, ademáis, un carácter de reivindicación social, especialmente en Valencia, ao presentarse o arquiduque Carlos como defensor dos campesiños.A Paz de Utrecht.	A paz asinouse nos tratados de Utrecht, 1713 e Rastadt, 1714 nos que, co obxectivo de manter o equilibrio europeo, estableceuse: Filipe V foi recoñecido como rei de España, agás por Austria, que o recoñecerá posteriormente, con expresa renuncia aos dereitos á Coroa de Francia.Gran Bretaña obtiña Xibraltar e Menorca, ademáis dun navío de permiso para comerciar con América e o asento de negros, a exclusiva de introducir a man de obra escrava nas colonias.Carlos de Habsburgo quedaba cos Países Baixos e territorios italianos.Holanda obtivo varias prazas para a súa defensa e seguridade na fronteira cos Países Baixos españois.O duque de Savoia recibía o título de rei de Piemonte e Sicilia.Portugal obtiña a colonia de Sacramento.O duque de Prusia recibía  parte de Holanda e o título de rei dese territorio.A pesar deste asinamento, a guerra continuou. En España, as tropas de Filipe V conquistaron Barcelona no 1714 e Mallorca e Ibiza no 1715, concluíndo así o conflito.",
      type: "text",
    },
    {
      name: "Decretos de Nova Planta",
      reldata: [],
      textdata:
        "Os Decretos de Nova Planta son un conxunto de decretos promulgados entre 1707 e 1716, polo rei Felipe V de Borbón, vencedor da Guerra de Sucesión Española (1701-1713), polos que quedaron abolidas as leis e institucións propias de o Reino de Valencia e de o Reino de Aragón o 29 de xuño de 1707, do Reino de Mallorca o 28 de novembro de 1715 e do Principado de Cataluña o 16 de xaneiro de 1716, todos eles integrantes da Coroa de Aragón que se decantaran polo arquiduque Carlos. Navarra, e as provincias vascas mantiveron os seus privilexios forais e réximes especiais (provincias exentas)ao manterse fieis á causa  borbónica . Felipe V puxo fin a a Coroa de Aragón pola vía militar e aboliu as institucións e leis propias que rexían os estados que a compoñían, instaurando no seu lugar un Estado  absolutista, centralista e uniformista, inspirado na Monarquía absoluta do seu avó Luís XIV e nalgunhas institucións da Coroa de Castela.1 Reorganización Administrativa: A Monarquía dos Austrias baseaba o seu sistema de goberno na autoridade do rei e nun conxunto amplo de Consellos  (réxime polisinodial) que limitaban a acción real e a eficacia administrativa. Felipe VI introduciu diversas modificacións co obxectivo de centralizar o poder en poucas mans: A- Reduciu o numero de Consellos, eliminando moitos e incrementando as funcións do Consello de Estado e o de Castela. B- Potenciou as Secretarías de Despacho( antecedente dos Ministerios), encargadas de diversos asuntos: Estado, Xustiza, Facenda, Guerra, Mariña e Indias. A concentración de poder favoreceu a potenciación do Secretario de Estado (antecedente do Primeiro Ministro). C- Incrementou o numero de Capitáns Xenerais, únicos representantes territoriais da orde real, eliminando os Vicerreis, agás o de Navarra. D- Creou os Intendentes  con funcións loxísticas  no exército abastecemento e recrutamento de soldados) e de fomento económico no seu territorio. E-  Transformou os antigos reinos medievais en novas Provincias e Capitanías. F- Diminuíu o papel das Cortes, que apenas tiveron funcións lexislativas e só se reuniron para xurar aos herdeiros á Coroa. Só se mantiveron as Cortes de Navarra e as Cortes de Castela. 2 Os Decretos de Nova Planta dos reinos da Coroa de AragónConsiderados rebeldes por tomar partido por Carlos de Austria na Guerra de Sucesión, , perderon a súa autonomía política e institucional. Abolían as Cortes, Deputacións  e o Consello de Cento. Ademais substituíase ao vicerrei por un capitán xeral, do mesmo xeito que no resto dos reinos da Coroa de Aragón, e dividíase Cataluña en doce correxidurías, como Castela e non nas tradicionais veguerías. Prohíbense os somaténs (milicias populares armadas de Cataluña e Aragón).  As aduanas interiores foron suprimidas e os seus tribunais xudiciais foron modificados.  Estableceuse o catastro gravando propiedades urbanas e rurais e os beneficios do traballo, o comercio e a industria.  A eliminación de fronteiras e aduanas interiores, facilitando o comercio. O catalán deixou de ser a lingua oficial e todos os documentos das diversas institucións foron redactados obrigatoriamente en castelán.​O decreto mantén o  Consulado do Mar e a xurisdición que este exercía, e non afectou o réxime político-administrativo do Val de Arán.  Desaparece o privilexio de estranxeiría , que impedía, por exemplo, que un castelán ocupase un cargo en Aragón, ou que un aragonés o fixera  en Castela. 3 Aplicación da Nova Planta en América hispanaOs tres primeiros decretos (1717 e 1718) crearon o  Virreinato de Nova Granada e pasan a abolir a encomenda   e modifícase a organización interna dos virreinatos, gobernacións e capitanías xerais.En 1719 refórmase o Consello de Indias, que ve reducida a súa actuación ao xudicial, e supón, de feito, a case abolición das Leis de Indias: coa aplicación preferente do dereito común castelán, o efecto da desaparición dos privilexios xurídicos dos indios na sociedade virreinal é moi prexudicial para estas comunidades, agora indefensas ante a presión dos  crioulos. O sistema de flotas e galeóns foi substituído polo sistema de navíos soltos ou navíos de rexistro e creáronse compañías comerciais autorizadas a comerciar nunha zona (Real Compañía de Galicia para comerciar co Iucatán) 4.As consecuencias deste programa absolutista e centralista levan a moitos historiadores a falar da existencia dun centralismo borbónico. Sen embargo esta apreciación debe ser matizada, pose subsistiron numerosos particularismos políticos: Navarra e as provincias vascas; moitas terras e homes seguiron baixo a autoridade e a xurisdición de señores particulares e a complexidade administrativa seguiu sendo moi forte.",
      type: "text",
    },
  ]);
  const [FormulaData, changeFormulaData] = useState<Formula[]>([
    { name: "Ec. 2º Grado", formula: "x = 2a−b ± sqrt(b^2−4ac)" },
    { name: "Área del rectángulo", formula: "A = l × w" },
    { name: "Área del triángulo", formula: "A = 1/2 × b × h" },
    { name: "Área del círculo", formula: "A = π × r^2" },
    { name: "Volumen del cubo", formula: "V = s^3" },
    { name: "Volumen del prisma rectangular", formula: "V = A_base × h" },
  ]);

  //quitamos a implementacio esta porque acabase o plazo
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
          {/* <SmallCard
            key={"da"}
            title={"Borrar Datos"}
            onClick={() => {
              localStorage.clear();
            }}
            data={{ name: ",", reldata: [], textdata: "", type: "Setting" }}
            type={"Setting"}
          /> */}
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
