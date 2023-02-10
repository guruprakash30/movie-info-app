import { useState } from "react";
import useFecth from "./usefectch";

const Pagination = ({setUrl}) => {

    const total_no_of_pages=200;

    const [current_page,setCurrentPage]=useState(1);

const PaginationList = ()=>{
    
    const page_begin = Math.floor(current_page/10)*10+1;

    const page_end = page_begin+9;

    const pages = [];

    const PageHandler = (page)=>{

        const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=05b670c12d1973fe82919a005ef06481&page='+page;
        setUrl(url);
    }

    for(let i=page_begin;i<=page_end;i++)pages.push(i);

    return (pages.map((page)=>
    <li><a className="pagination-link" onClick={()=>{PageHandler(page)}}>{page}</a></li>
    ));
}



    return (
        <footer className="footer">
            <nav className="pagination is-centered">
            <a href="" className="pagination-previous">Previous</a>
            <a href="" className="pagination-next">Next page</a>
            <ul className="pagination-list">
                <li><a className="pagination-link">{"<<<"}</a></li>
               <PaginationList/>
               <li><a className="pagination-link">{">>>"}</a></li>
            </ul>
        </nav>
        </footer>
    );
}
 
export default Pagination;