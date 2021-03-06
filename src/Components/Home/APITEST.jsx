import React, {useState, useEffect} from 'react';
import axios from 'axios'

const APITEST = () => {
    const [response, setResponse] = useState({data: {datatown: {thing: '.', anotherthing: '.'}}});

    useEffect(() => {
        axios({
            url: 'http://localhost:4000/',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                query: `
                    {
                        datatown(movie_id: "616037") {
                            thing
                            anotherthing
                        }
                    }
                `
            }
        }).then((r) => {
            console.log(r)
            setResponse(r.data.data.datatown[0])
        })
    }, [])
    
    return(
        <div>
            <p>Thing: {response.thing}</p>
            <p>Another Thing: {response.anotherthing}</p>
        </div>
    )
}

export default APITEST;