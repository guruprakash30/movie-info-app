import { useEffect, useState } from "react"

const useFecth  = (endpoint) =>{

    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(null);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(endpoint)


    const request = (requestUrl) =>{

        fetch(requestUrl).then((res)=>{
    
            if(!res.ok)throw Error('could not fetch data');
    
            return res.json();
           })
           .then((data)=>{

            setData(data);
            
           })
           .catch((err)=>{
            
            setError(err);
            
            console.log(err);
           })
    }
    
    useEffect(()=>{
        request(endpoint);
    },[endpoint]);

    useEffect(()=>{
        request(url);
    },[url]);

    return { data, isPending, error , setData, setUrl};

}
   

export default useFecth;