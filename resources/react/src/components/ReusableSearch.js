import React, { useEffect } from 'react';
import * as authService from "../service/auth_service";

const ReusableSearch = () => {
    useEffect(() => {
        console.log('search page use effect: ')
        // fetchData() // 
    }, [])

    const fetchData = async () => {
        try {
            const response = await authService.getUser()
            console.log('Reusable search page user fetch SUCCESS == ', response)
        } catch (error) {
            console.log('Reusable search page user fetch ERROR')
        }
    }

    return (
        <div className="reusable-search">
            <div>
                <h1>Resorts</h1>
                <p>Treat yourself. Your Dream resort stay in just  a few clicks away</p>
            </div>
            <div className="search-field-wrapper"> 
                <div> <span> <i class="fas fa-car"></i>  More places than you can ever go (but you can try). </span> </div>
                <div> <span> <i class="far fa-calendar-alt"></i> Check In </span> <span> - </span> <span> Check Out </span> </div>
                <div> <i class="fas fa-user"></i> <span>Two Adults. </span> <span>0 Children .</span> <span> 1  room </span> <i class="fas fa-arrows-alt-v"></i> </div>
                <div> <h2> Search </h2> </div>
            </div>
        </div>
    )
}

export default ReusableSearch