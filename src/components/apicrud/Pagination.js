/* Pagination Component 
-------------------------------------------------*/
import React,{useState, useEffect} from 'react';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

const Pagination1 = () =>{

      const [currentPage, setCurrentpage] = useState("")
      
      const changeCurrentPage = numPage => {
        // this.setState({ currentPage: numPage });
        setCurrentpage(numPage)
        //fetch a data
        //or update a query to get data
      }
    return (
        <div className="container">
             <Pagination
          currentPage={currentPage}
          totalPages={10}
          changeCurrentPage={changeCurrentPage}
          theme="square-fill"
        />
        </div>
    )
}

export default Pagination1;