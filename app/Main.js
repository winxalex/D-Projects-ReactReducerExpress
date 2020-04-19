import React from 'react'
import Store, { StoreContext } from '../app/store/Store'
import DashboardConsumer from './components/Dashboard'


export default function Main() {
    return (
        <div>
            <Store>
                <DashboardConsumer />
            </Store>
        </div>
    )
}
