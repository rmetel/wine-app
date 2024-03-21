import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar, WineCard } from "./components";

export const App = () => {
  const items = [
    {
      id: "a",
      name: "San Marzano (Apuglien)",
      grape: "Primitivo",
      price: 14.95,
    },
    {
      id: "b",
      name: "San Marzano (Apuglien)",
      grape: "Primitivo",
      price: 14.95,
    },
    {
      id: "c",
      name: "San Marzano (Apuglien)",
      grape: "Primitivo",
      price: 14.95,
    },
    {
      id: "d",
      name: "San Marzano (Apuglien)",
      grape: "Primitivo",
      price: 14.95,
    },
    {
      id: "e",
      name: "San Marzano (Apuglien)",
      grape: "Primitivo",
      price: 14.95,
    },
    {
      id: "f",
      name: "San Marzano (Apuglien)",
      grape: "Primitivo",
      price: 14.95,
    },
    {
      id: "g",
      name: "San Marzano (Apuglien)",
      grape: "Primitivo",
      price: 14.95,
    },
    {
      id: "h",
      name: "San Marzano (Apuglien)",
      grape: "Primitivo",
      price: 14.95,
    },
  ];

  return (
    <div className="App">
      <NavBar />

      <div className="container" style={{ marginTop: 100 }}>
        <div className="row mt-5">
          {items.map((item) => (
            <div key={item.id} className="col-sm-3 col-lg-3">
              <WineCard item={item} />
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
