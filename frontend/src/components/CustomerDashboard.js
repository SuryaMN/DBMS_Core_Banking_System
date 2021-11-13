import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CustomerDashboard() {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
    return (    

        <div>
            <h3>Welcome Customer</h3>
        </div>
    )
}
