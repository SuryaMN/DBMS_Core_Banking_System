import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'


export default function HighestWorthTransactionsComponent() {

    const [transactions, setTransactions] = useState([])
    const auth = useSelector(state => state.auth)

    useEffect(() => {
      
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        if(auth.token) config.headers['jwtToken']=auth.token;
        axios.get('http://localhost:8000/api/transaction/maxAmountTransactions',config)
        .then(result => {
            setTransactions(result.data)
        })
        .catch(error => {
            alert(error.response.data.msg);
        })
    }, [])

    return (
        <div>
            <h2>Accounts with highest worth Transactions</h2>
            <ul>
            {
                transactions.map(transaction => {
                    return (
                        <div key={transaction.acc_number}  style={{borderStyle:'solid',margin:'10px',padding:'10px'}}>
                            <h4>Account Number : {transaction.acc_number}</h4>
                            <h4>Total Transaction Amount : {transaction.amount}</h4>
                        </div>
                    )
                })
            }
            </ul>
        </div>
    )
}
