import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authActions';
import { Link } from 'react-router-dom';

export default function CustomerDashboard() {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    

    function logoutUser(){
        dispatch(logout());
    }

    return (    

        <div>
            <h3>Welcome {auth.user.e_name}</h3>
            <Link to='/createAccount'><button>Create Account</button></Link>
            <Link to='/loanResolve'><button>View Loan Applications</button></Link>
            <Link to='/notActive'><button>View Not active accounts</button></Link>
            <Link to='/maxAmountTransactions'><button>View Accounts with highest worth transactions</button></Link>
            <Link to='/noAccount'><button>Customers with no Account</button></Link>
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
}
