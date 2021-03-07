import React, { useEffect, useState } from 'react';
import * as authService from "../../service/auth_service";
import http from "../../service/http_service";
import ReusableSearch from '../search/ReusableSearch'; 

import { Link } from 'react-router-dom'

const BASE_URL = "http://127.0.0.1:8000"

const SearchPage = () => {
    const [properties, setProperties] = useState([])
    useEffect(() => {
        console.log('search page use effect: ')
        fetchData() 
    }, [])

    const fetchData = async () => {
        try {
            console.log("http === ", http)
            const response = await http.get('/properties')
            setProperties ( response.data )
            console.log('search page user fetch SUCCESS == ', response)
        } catch (error) {
            console.log('search page user fetch ERROR', error)
        }
    }

    const renderRow = (obj) => {
        const obj2 = {
            type: 'Single',
            title: 'I am yours', 
            description: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor ",
            country: 'Bangladesh', 
            city: 'Dhaka'
        }
        return <div className="single-property-row">
            <Link to={`/detail/${obj.id}`}>
                <div className="img-block">
                    <img src={`${BASE_URL}${obj.photos[0].img_path}`} />
                    <div className="heartbtn"> 
                        <div className="icon-container">
                            <i className="far fa-heart"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <div>
                <p className="type"> {obj.type} </p>
                <p className="title"> {obj.title} </p>
                <p className="desc"> {obj.description} </p>
                <p className="city"> {'City: '} {obj.city} </p>
                <p className="country"> {'Country: '} {obj.country} </p>

            </div>
        </div>
    }

    return (
        <div className="m-7"> 
            <ReusableSearch />

            <div style={{marginTop: '30px'}}>
                {
                    properties.map(obj => {
                        return <div key={obj.id}> 
                            { renderRow(obj) }
                        </div>
                    })
                } 


            </div>    
        </div>
    )
}

export default SearchPage