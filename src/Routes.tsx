import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/molecules/PrivateRoute'
import * as Page from 'pages'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Page.default} />
        <Route path="/getting-started" exact component={Page.GettingStarted} />

        <PrivateRoute path="/board" exact component={Page.Board} />
        <PrivateRoute path="/vote" exact component={Page.Votes} />
        <PrivateRoute path="/goal" exact component={Page.Goals} />
        <PrivateRoute path="/resume" exact component={Page.Resume} />
      </Switch>
    </Router>
  )
}
