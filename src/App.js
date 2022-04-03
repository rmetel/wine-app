import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap';
import {Badge} from 'reactstrap';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-3">
            <div className="card bg-dark">
              <Badge href="#" color="default">2017</Badge>
              <img className="card-img-top" src="wine-bottle.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">San Marzano (Apuglien)</h5>
                <p className="card-text">Primitivo</p>
                <p className="card-text">14,95 €</p>
                <a href="#" className="btn-simple btn-round btn btn-primary btn btn-primary">Hinzufügen</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card bg-dark">
              <Badge href="#" color="default">2014</Badge>
              <img className="card-img-top" src="wine-bottle.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">San Marzano (Apuglien)</h5>
                <p className="card-text">Primitivo</p>
                <p className="card-text">14,95 €</p>
                <a href="#" className="btn-simple btn-round btn btn-primary btn btn-primary">Hinzufügen</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card bg-dark">
              <Badge href="#" color="default">2015</Badge>
              <img className="card-img-top" src="wine-bottle.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">San Marzano (Apuglien)</h5>
                <p className="card-text">Primitivo</p>
                <p className="card-text">14,95 €</p>
                <a href="#" className="btn-simple btn-round btn btn-primary btn btn-primary">Hinzufügen</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card bg-dark">
              <Badge href="#" color="default">2018</Badge>
              <img className="card-img-top" src="wine-bottle.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">San Marzano (Apuglien)</h5>
                <p className="card-text">Primitivo</p>
                <p className="card-text">14,95 €</p>
                <a href="#" className="btn-simple btn-round btn btn-primary btn btn-primary">Hinzufügen</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
