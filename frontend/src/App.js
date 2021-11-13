import {BrowserRouter as Router, Route}from 'react-router-dom'
import store from './redux/store'
import {Provider} from 'react-redux'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './redux/auth/authActions';
import SignupComponent from './components/SignupComponent';
import LoginComponent from './components/LoginComponent';
import CustomerDashboard from './components/CustomerDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import EmployeeDashboard from './components/EmployeeDashboard';




function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/signup' component={SignupComponent}  />
        <ProtectedRoute exact path='/' component={CustomerDashboard} />
        {/* <ProtectedRoute exact path='/employee' component={EmployeeDashboard} /> */}
        <Route exact path='/login' component={LoginComponent}  />

      </Router>
    </Provider>
  );
}

export default App;
