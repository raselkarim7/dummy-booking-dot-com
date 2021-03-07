import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import http from '../../service/http_service'


const PropertyAdd = () => {
    
    let history = useHistory();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [available_start_date, setAvailable_start_date] = useState('')
    const [available_end_date, setAvailable_end_date] = useState('')
    const [type, setType] = useState('')
    const [photos, setPhotos] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()

        console.log('title: ', title)
        console.log('description: ', description)
        console.log('city: ', city)
        console.log('country: ', country)
        console.log('available_start_date: ', available_start_date)
        console.log('available_end_date: ', available_end_date)
        console.log('type: ', type)
        console.log('photos: ', photos)

        console.log('inside handle submit')
        const formdata = new FormData(); 

        formdata.append('title', title)
        formdata.append('description', description)
        formdata.append('city', city)
        formdata.append('country', country)
        formdata.append('available_start_date', available_start_date)
        formdata.append('available_end_date', available_end_date)
        formdata.append('type', type)
        for (let i=0; i<photos.length; i++ ) {
            let photo = photos[i]
            formdata.append('photos[]', photo)
        }

        // history.push('/search')
        try {
            const response = await http.post('/property-add', formdata)
            console.log('response ==== ', response)
        } catch (error) {
            console.log('errrrrrrrrr: ', error)
        }
        // http.post('/property-add', {name: 'rasel karim'})


    }

    return (
        <div className="m-5"> 
            <h1 className="text-center m-5" >  Property Add </h1>
            <form className="simple-basic-form" onSubmit={handleSubmit}>

                <label >
                    <span>Title: </span>
                    <input id="title" name="title" type="text" required onChange={(event) => setTitle(event.target.value)} />
                </label>
                <br />
                <label >
                    <span>Description: </span>
                    <input id="description" name="description" type="text" required onChange={(event) => setDescription(event.target.value)} />
                </label>
                <br />
                <label >
                    <span>City: </span>
                    <input id="city" name="city" type="text" required onChange={(event) => setCity(event.target.value)} />
                </label>
                <br />
                <label >
                    <span>Country: </span>
                    <input id="country" name="country" type="text" required onChange={(event) => setCountry(event.target.value)} />
                </label>
                <br />
                <label >
                    <span>Available start date: </span>
                    <input id="available_start_date" name="available_start_date" type="date"  onChange={(event) => setAvailable_start_date(event.target.value)} />
                </label>
                <br />
                <label >
                    <span>Available end date: </span>
                    <input id="available_end_date" name="available_end_date" type="date" onChange={(event) => setAvailable_end_date(event.target.value)} />
                </label>
                <br />
                <label>
                    <span>Select Type</span>
                    <select value={type} onChange={(event) => setType(event.target.value)} required >
                        <option value=""></option>
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                    </select>
                </label>
                <br />
                <label >
                    <span>Photos: </span>
                    <input id="photos" name="photos" type="file" multiple  onChange={(event) => setPhotos(event.target.files)} />
                </label>
                <br />

                <input type="submit" value="Submit" />
                
            </form>
        </div>
    )
}

export default PropertyAdd