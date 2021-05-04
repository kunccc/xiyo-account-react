import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Labels from 'views/Labels';
import Money from 'views/Money';
import Statistic from 'views/Statistic';
import NoMatch from 'views/NoMatch';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/labels">
          <Labels/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistic">
          <Statistic/>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;