import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { getEvent } from "../services/EventServices";


export default function Pagination({itemsPerPage, setEventPagination, count}){
    // const [currentItems, setCurrentItems] = useState({});
    const [pageCount, setPageCount] = useState(0);
    
    const [itemOffset, setItemOffset] = useState(0);

    const [pageNum, setPageNum] = useState(1)

    useEffect(() => {
        // Fetch items from another resources.
        // const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        // setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(count / itemsPerPage));
        getEvent(pageNum, 4).then(
          async(res)=>{
              const data = await res.json()
              setEventPagination(data.data.rows)
              console.log(data.data.rows)
          }
        )


        // setItems(currentItems)
      }, [itemOffset]);

      function handlePageClick(event){
        // event.preventDefault();
        const newOffset = (event.selected * itemsPerPage) % count;
        setPageNum(event.selected+1)
        // setEventPagination(data.data.rows)
               
        // console.log(currentItems)
        setItemOffset(newOffset);

      };

    
    return(
        <ReactPaginate
            onPageChange={handlePageClick}
            pageCount={pageCount}
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