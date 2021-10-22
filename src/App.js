import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import Specific from "./pages/Specific";
import {Route,Switch} from "react-router-dom"
import One from "./pages/One";
import Contact from "./pages/Contact";

function App() {
  return (
       <div className="rootMain">
        <Navbar/>
        
        <Switch>
           <Route exact  path="/" component={Home}/>
           <Route exact path="/spec/:id" component={Specific}/>
           <Route path="/one" component={One}/>
           <Route path="/" component={Contact}/>
        </Switch>

        <Footer/>
       </div>
  );
}

export default App;
