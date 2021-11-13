import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function EmployeeDashboard() {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
    return (    

        <div>
            <h3>Welcome Employee</h3>
        </div>
    )
}
