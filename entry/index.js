import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory,hashHistory } from 'react-router';
import Index from '../js/index/index';
import Button from '../js/components/button/button'

render((
    <Router history={browserHistory}>
    	<Route path="/" component={Index}>
      	</Route>
      	<Route path="/button" component={Button}></Route>
    </Router>
), document.getElementById('roots'))