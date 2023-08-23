import React, { useEffect } from 'react'

const Api = () => {



    const store = async (e) => {

        // const url = 'https://pizza-and-desserts.p.rapidapi.com/pizzas';
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': 'ead7bfc400msh35b2db94200a60ap1c770djsn30489492ba26',
        //         'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
        //     }
        // };
        const url = 'https://the-birthday-cake-db.p.rapidapi.com/';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ead7bfc400msh35b2db94200a60ap1c770djsn30489492ba26',
                'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        store();
    }, []);

    return (
        <div>Api</div>
    )
}

export default Api