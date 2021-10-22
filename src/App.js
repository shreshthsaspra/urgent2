import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import Specific from "./pages/Specific";
import {Route,Switch} from "react-router-dom"
import One from "./pages/One";
import Contact from "./pages/Contact";
import Two from "./pages/Two";

function App() {
  return (
       <div className="rootMain">
        <Navbar/>
        
        <Switch>
           <Route exact  path="/" component={Home}/>
           <Route exact path="/事業内容" component={Specific}/>
           <Route path="/施工実績" component={One}/>
           <Route path="/会社案内" component={Two}/>
           <Route path="/お問い合わせ" component={Contact}/>
        </Switch>

        <Footer/>
       </div>
  );
}

export default App;
