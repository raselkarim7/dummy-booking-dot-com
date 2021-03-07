import React, { useEffect } from 'react';
import * as authService from "../../service/auth_service";
import ReusableSearch from '../search/ReusableSearch'; 
const SearchPage = () => {
    useEffect(() => {
        console.log('search page use effect: ')
        // fetchData() // 
    }, [])

    const fetchData = async () => {
        try {
            const response = await authService.getUser()
            console.log('search page user fetch SUCCESS == ', response)
        } catch (error) {
            console.log('search page user fetch ERROR')
        }
    }

    return (
        <div className="m-7">     
            <ReusableSearch />
        </div>
    )
}

export default SearchPage