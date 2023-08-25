import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getItems, setData } from '../Redux/Slices/itemSlice';
const Api = () => {

    const dispatch = useDispatch();

    const api = async ()=>{
        const url = 'https://the-birthday-cake-db.p.rapidapi.com/';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'e36681565emsh9146c025fdbce31p16f28cjsne0f0e729a32d',
            'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
          }
        };
    
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          // console.log(JSON.parse(result));
          dispatch(setData(result));
        } catch (error) {
          console.error(error);
        }
      }


    useEffect(() => {
        api();
    }, []);

    return (
        <div>Api</div>
    )
}

export default Api