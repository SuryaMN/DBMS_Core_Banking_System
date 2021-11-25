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
import TransactionComponent from './components/TransactionComponent';
import AccountComponent from './components/AccountComponent';
import FetchTransactionsComponent from './components/FetchTransactionsComponent';
import CreateAccountComponent from './components/CreateAccountComponent';
import LoanApplyComponent from './components/LoanApplyComponent';
import LoanResolveComponent from './components/LoanResolveComponent';
import InactiveAccounts from './components/InactiveAccounts';
import HighestWorthTransactionsComponent from './components/HighestWorthTransactionsComponent';
import NoAccountComponent from './components/NoAccountComponent';
import HomeComponent from './components/HomeComponent';



store.dispatch(loadUser())

function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={HomeComponent}  />
        <Route exact path='/signup' component={SignupComponent}  />
        <ProtectedRoute exact path='/customer' component={CustomerDashboard} role='customer' />
        <ProtectedRoute exact path='/employee' component={EmployeeDashboard} role='employee' />
        <ProtectedRoute exact path='/transaction' component={TransactionComponent} role='customer' />
        <ProtectedRoute exact path='/accounts' component={AccountComponent} role='customer' />
        <ProtectedRoute exact path='/fetchTransactions/:account_no' component={FetchTransactionsComponent} role='customer' />
        <ProtectedRoute exact path='/createAccount' component={CreateAccountComponent} role='employee' />
        <ProtectedRoute exact path='/loanApply' component={LoanApplyComponent} role='customer' />
        <ProtectedRoute exact path='/loanResolve' component={LoanResolveComponent} role='employee' />
        <ProtectedRoute exact path='/notActive' component={InactiveAccounts} role='employee' />
        <ProtectedRoute exact path='/maxAmountTransactions' component={HighestWorthTransactionsComponent} role='employee' />
        <ProtectedRoute exact path='/noAccount' component={NoAccountComponent} role='employee' />
        <Route exact path='/login' component={LoginComponent}  />

      </Router>
    </Provider>
  );
}

export default App;
