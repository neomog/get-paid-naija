import './App.css';
import Navbar from "./components/Navbar";
import ShowCase from "./components/ShowCase";
import Footer from "./components/Footer";
import About from "./components/About";
import Faq from "./components/Faq";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={ShowCase} />

        <Route path="/about" component={About} />

        <Route path="/faq" component={Faq} />

        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
