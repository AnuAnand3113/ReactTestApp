export const Contact = () => {
  return (
    <div>
      <p>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          How to contact ?
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Block 1 A DLF IT Park Road I Block, Manapakkam, Ramapuram, Chennai,
          Tamil Nadu 600125
          <a href="https://maps.app.goo.gl/uNbqWJXs5hnB2Q587" target="_blank">
            Link to the address
          </a>
        </div>
      </div>
    </div>
  );
};
