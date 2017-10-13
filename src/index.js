import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MainC from './comps/00-MainComp.jsx';
import Page1 from './comps/01-Page.jsx';
import Page2 from './comps/02-Page.jsx';


const BasicExample = () => {
  return(
    <Router>
      <div>

        <ul>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/1">Page 1</Link></li>
          <li><Link to="/2">Page 2</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={MainC}/>
        <Route path="/1" component={Page1}/>
        <Route path="/2" component={Page2}/>

      </div>
    </Router>
  )
}

ReactDOM.render(<BasicExample />, document.getElementById("root"));
