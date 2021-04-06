import { BrowserRouter,Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Feedback from "./Screens/feedback";
function App() {
  return (
    
    <div className="App">
      <Route path="/" component={Feedback} />
    </div>
    
    
  );
}

export default App;