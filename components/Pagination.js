import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { getEvent } from "../services/EventServices";


export default function Pagination({setEventPagination, perpage}){
    // const [currentItems, setCurrentItems] = useState({});
    // const [pageCount, setPageCount] = useState(0);
    const [pageNum, setPageNum] = useState(1)

    useEffect(() => {
      console.log(perpage)
        getEvent(pageNum, 4).then(
          async(res)=>{
              const data = await res.json()
              console.log(data.data.rows)
              setEventPagination(data.data.rows)
          }
        )
      }, [pageNum]);

      function handlePageClick(event){
        setPageNum(event.selected+1)
      };

    
    return(
        <ReactPaginate
            onPageChange={handlePageClick}
            pageCount={perpage}
            renderOnZeroPageCount={null}
            //  real
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={".."}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            activeClassName={"active"}
            pageClassName={"page-item page-link"}
            nextLinkClassName={"page-link"}
            nextClassName={"page-item next"}
            previousClassName={"page-item prev"}
            previousLinkClassName={"page-link"}
            pageLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            containerClassName={
            "pagination react-paginate flex justify-end my-2 pr-1"
            }

      />
    )
}