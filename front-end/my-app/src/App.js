import Homepage from './components/homepage'
import Signup from './components/signup';
import JobCards from './components/jobcards'
import Applied_jobs from './components/applied'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div>
      
      <Router>
        <Switch>
        <PrivateRoute exact path="/applied" component={Applied_jobs}/>
          <Route path='/jobs'>
            <JobCards/>
          </Route>
          <Route exact path="/signup" component={Signup}/>
          <Route path='/'>
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
