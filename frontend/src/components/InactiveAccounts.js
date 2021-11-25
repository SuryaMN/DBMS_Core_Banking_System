import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'

export default function InactiveAccounts() {
    const [accounts, setAccounts] = useState([])
    const auth = useSelector(state => state.auth)
    useEffect(() => {
      
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        if(auth.token) config.headers['jwtToken']=auth.token;
        // console.log(auth.token)
        axios.get('http://localhost:8000/api/transaction/notActive',config)
        .then(result => {
            // console.log(result.data)
            setAccounts(result.data)
        })
        .catch(error => {
            // dispatch(authError(null));
            alert(error.response.data.msg);
        })
    }, [])

    if(accounts.length === 0){
        return(
            <div>
                No accounts
            </div>
        )
    }

    
    else{

        return (
            <div>
                <h2>Accounts with no transactions from past 1 day</h2>
                <ul>
                {
                    accounts.map(account => {
                        return (
                            <div key={account.acc_number}  style={{borderStyle:'solid',margin:'10px',padding:'10px'}}>
                                <h4>Customer ID : {account.customer_id}</h4>
                                <h4>Account Number : {account.acc_number}</h4>
                                {/* <h4>Beneficiary : {transaction.beneficiary_acc_no}</h4> */}
                                <h4>Balance : {account.balance}</h4>
                            </div>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}
