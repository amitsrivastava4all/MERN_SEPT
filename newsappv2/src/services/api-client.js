// BackEnd News Api Call
import axios from 'axios';
export const getNews = async (country = 'in')=>{
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=11f0dc28d8874be0bb82287cbcf26121`;
    //const promise = axios.get(URL);
    return await axios.get(URL);
}