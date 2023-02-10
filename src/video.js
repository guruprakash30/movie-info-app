import { useEffect } from "react";
import useFecth from "./usefectch";

const  Videocontent= ({query}) => {
    
    const {data:result} = useFecth('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCpVq3DiYObX9ud8YU0jEhFR9rA99ZOric&type=video&q='+query+'&maxResults=1');
    
    return (
        <>
        {result && result.items.map((item)=>
        <figure class="image is-16by9">
        <iframe class="has-ratio" width="640" height="360" src={"https://www.youtube.com/embed/"+item.id.videoId} frameborder="0" allowfullscreen></iframe>
      </figure>
        )}
        </>
    );
}
 
export default Videocontent;