import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'


export default function NoAccountComponent() {

    const [customers, setCustomers] = useState([])
    const auth = useSelector(state => state.auth)

    useEffect(() => {
      
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        if(auth.token) config.headers['jwtToken']=auth.token;
        axios.get('http://localhost:8000/api/account/noAccount',config)
        .then(result => {
            setCustomers(result.data)
        })
        .catch(error => {
            alert(error.response.data.msg);
        })
    }, [])

    return (
        <div>
            <h2>Customers not having any Account</h2>
            <ul>
            {
                customers.map(customer => {
                    return (
                        <div key={customer.customer_id}  style={{borderStyle:'solid',margin:'10px',padding:'10px'}}>
                            <h4>Customer ID : {customer.customer_id}</h4>
                            <h4>Name : {customer.c_name}</h4>
                        </div>
                    )
                })
            }
            </ul>
        </div>
    )
}
