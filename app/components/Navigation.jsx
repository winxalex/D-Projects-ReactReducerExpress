
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navigation = (props) => (

    <div>
        <Link to="/dashboard">
            My Applicaiton
        </Link>
    </div>


)


export default function NavigationConsumer() {

    const [state] = useState()

    return (
        <div>
            <Navigation {...state} />
        </div>
    )
}

