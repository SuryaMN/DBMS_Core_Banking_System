import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeComponent() {
    return (
        <div>
            <h1 style={{textAlign:"center",color:'blue',margin:'100px'}}>Welcome to IMPERIAL BANK OF PES</h1>
            <div style={{textAlign:"center",margin:'20px'}}><Link to='/login'><button style={{width:'30%',height:'100%'}}>Login</button></Link></div>
            <div style={{textAlign:"center"}}><Link to='/signup'><button style={{width:'30%',height:'100%'}}>Signup</button></Link></div>    
        </div>
    )
}
