import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

export default function Pagination({itemsPerPage, setItems, items}){
    const [currentItems, setCurrentItems] = useState(items);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        // console.log(currentItems)
        setPageCount(Math.ceil(items.length / itemsPerPage));
        // setItems(currentItems)
      }, [itemOffset, itemsPerPage]);

      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //   `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        console.log(currentItems)
        setItemOffset(newOffset);
        setItems(currentItems);
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