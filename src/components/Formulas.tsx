import { Formula } from "./types";

interface Props {
  data: Formula[];
}

const Formulas = ({ data }: Props) => {
  return (
    <>
      <h3>Formulas</h3>

      <div className="flex-column">
        {data.map((item, index) => (
          <>
            <div className="input-group input-group-lg" key={index}>
              <div className="input-group-prepend p-2">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  {item.name}
                </span>
              </div>
              <input
                disabled
                type="text"
                className="form-control p-2 ta-c"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder={item.formula.toString()}
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Formulas;
