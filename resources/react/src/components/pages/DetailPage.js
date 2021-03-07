import { getScript } from 'jquery';
import React, { useEffect, useState } from 'react';

import fallbackImg from '../../assets/fallback.png'

import http from '../../service/http_service'
const BASE_URL = 'http://127.0.0.1:8000'
const DetailPage = (props) => {
    const [property, setProperty] = useState({})
    useEffect(() => {
        let propery_id = props.match.params.id
        fetchData(propery_id)

    }, [])

    async function fetchData (propery_id) {
        try {
            const response = await http.get(`/properties/${propery_id}`)
            console.log('response === ', response)
            setProperty(response.data)
        } catch (error) {
            
        }
    } 

    function getSource ( photos, index ) {
        if (photos.length > index) {
            return `${BASE_URL}${photos[index].img_path}`
        }
        return fallbackImg
    }

    if ( Object.keys(property).length === 0) {
        return <div>Loading...</div>
    }
    return (
        <div className="detail"> 
            <div className="title"> {property.title} </div>
            <div className="type"> {property.type} </div>
            <div className="three-img-grid">
                <div className="img1">
                    <img src={getSource(property.photos, 0)} />
                </div>
                <div className="img2">
                    <img src={getSource(property.photos, 1)} />
                </div>
                <div className="img3">
                    <img  src={getSource(property.photos, 2)} />
                </div>
            </div>
            <div className="desc"> {property.description} </div>
        </div>
    )
}

export default DetailPage