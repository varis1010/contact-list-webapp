import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Dashboard from './Pages/Dashboard/index';
import Layout from './Components/Layout/index'

const Routes = () => {
  const RoutesList = [
    <Route path="/" key='dashboard' component={Dashboard} exact />,
  ];

  return (
    <Router>
      <Layout>
        <Switch>
          {RoutesList.map(r => r)}
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routes;
