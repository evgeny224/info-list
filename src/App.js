import Header from "./Components/Header.jsx";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import InformationPage from "./Pages/InformationPage/InformationPage";
import ExperiencePage from "./Pages/ExperiencePage/ExperiencePage";
import EducationPage from "./Pages/EducationPage/EducationPage";
import ReviewPage from "./Pages/ReviewPage/ReviewPage";


function App() {
  return (
    <div>
      <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path = "/" component = {InformationPage} />
            <Route exact path = "/experience" component = {ExperiencePage} />
            <Route exact path = "/education" component = {EducationPage} />
            <Route exact path = "/review" component = {ReviewPage} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
