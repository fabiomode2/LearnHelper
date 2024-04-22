const NewForm = () => {
  return (
    <>
      <h2>Introduce a formula</h2>

      <input
        type="text"
        className="form-control mm-2 ta-c"
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
      ></input>

      <button type="button" className="btn btn-outline-info btn-lg btn-block">
        Add formula to database
      </button>
    </>
  );
};

export default NewForm;
