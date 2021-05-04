import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import React from 'react';
import Layout from 'components/Layout';

function App() {
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

function Labels() {
  return (
    <Layout>
      <h2>标签</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账</h2>
    </Layout>
  );
}

function Statistic() {
  return (
    <Layout>
      <h2>数据</h2>
    </Layout>
  );
}

function NoMatch() {
  return <h2>路径错误</h2>;
}

export default App;