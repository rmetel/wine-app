export const Wine = ({ item }) => {
  return (
    <>
      <div className="card mb-3">
        <img className="berry" src="blueberry.png" alt="blueberry" />
        <div className="card-img-wrapper">
          <img className="card-img-top" src="wine-bottle.png" alt="bottle3" />
        </div>
        <div className="card-body">
          <h5 className="card-title urbanist-300">
            <strong>{item.name}</strong>
          </h5>
          <p className="card-text urbanist-300">
            <strong>{item.grape}</strong>
          </p>
          <p className="card-text urbanist-300">{item.price} €</p>
          <a
            className="urbanist-400"
            href="/abc"
            style={{
              borderRadius: 0,
              border: `1px solid #aaa`,
              padding: "7px 15px",
              textDecoration: "none",
              color: "#333",
            }}
          >
            Hinzufügen
          </a>
        </div>
      </div>
    </>
  );
};
