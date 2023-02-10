import { useEffect, useState } from "react"

const useFecth  = (endpoint) =>{

    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(null);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(endpoint);

    useEffect(()=>{
        fetch(url).then((res)=>{
    
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
    },[url]);

    return { data, isPending, error, setUrl , setData};

}
   

export default useFecth;