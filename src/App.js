import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Button color="primary" className="btn-simple btn-round btn btn-primary">Add to cart</Button>
      <Footer/>
    </div>
  );
}

export default App;
