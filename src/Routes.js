import { BrowserRouter, Switch,Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/portfolio" component={PortfolioPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;