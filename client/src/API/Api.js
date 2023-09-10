import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setData } from '../Redux/Slices/itemSlice';
import data from './product.json';
const Api = () => {

    const dispatch = useDispatch();

    const api = async () => {
        const url = 'https://the-mexican-food-db.p.rapidapi.com/';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e36681565emsh9146c025fdbce31p16f28cjsne0f0e729a32d',
                'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(JSON.parse(result));
            dispatch(setData(data));
            console.log("hello Api");
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        api();
    }, [dispatch]);

}

export default Api