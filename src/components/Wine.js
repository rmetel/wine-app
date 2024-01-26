export const Wine = ({ item }) => {
  return (
    <>
      <div className="card mb-3">
        <img className="berry" src="blueberry.png" alt="blueberry" />
        <div className="card-img-wrapper">
          <img className="card-img-top" src="wine-bottle.png" alt="bottle3" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.grape}</p>
          <p className="card-text">{item.price} €</p>
          <a
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
