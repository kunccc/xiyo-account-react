import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Labels from 'views/Labels';
import Money from 'views/Money';
import Statistic from 'views/Statistic';
import NoMatch from 'views/NoMatch';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/labels" component={Labels}/>
        <Route path="/money" component={Money}/>
        <Route path="/statistic" component={Statistic}/>
        <Redirect exact from="/" to="/money"/>
        <Route path="*" component={NoMatch}/>
      </Switch>
    </Router>
  );
}

export default App;