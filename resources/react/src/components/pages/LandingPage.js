import React, { useState, useEffect } from 'react';
import ReusableSearch from '../search/ReusableSearch'
import http from '../../service/http_service'
const BASE_URL = "http://127.0.0.1:8000"
const LandingPage = () => {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        console.log('search page use effect: ')
        fetchData() 
    }, [])

    const fetchData = async () => {
        try {
            console.log("http === ", http)
            const response = await http.get('/properties')
            //setProperties ( response.data.filter((o, index) => index < 3 ))
            console.log('search page user fetch SUCCESS == ', response)
        } catch (error) {
            console.log('search page user fetch ERROR', error)
        }
    }


    return (
        <div className="mt-5"> 
            <ReusableSearch />
            <div className="landing-page"> 
                <h1>What guests are saying about homes in UK</h1>
                <div className="img-cards-container">
                {
                    properties.map(obj => {
                        return <div className="img-cards" key={obj.id}>
                            <img src={`${BASE_URL}${obj.photos[0].img_path}`} />
                            <div className="m-2">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    })
                }
                </div>


            </div>
        </div>
    )
}

export default LandingPage