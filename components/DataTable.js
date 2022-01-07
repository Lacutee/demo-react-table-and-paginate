import { useState } from 'react';
import DataTable from 'react-data-table-component';
import Pagination from './pagination';



export default function Movie({dataEvent, count, perpage}){
    const [data, setData] = useState(dataEvent)
    const [perpageState, setPerpageState] = useState(perpage)
    const columns = [
        {
            name: "Id",
            selector: (row) => row.id,
            maxWidth: "1%"
          },
          {
            name: "Title Event",
            selector: (row) => row.title,
            maxWidth: "15%"
          },
          {
            name: "Description",
            selector: (row) => row.description,
            maxWidth: "35%"
          },
          {
            name: "Speaker",
            selector: (row) => row.speaker,
            maxWidth: "15%"
          },
          {
            name: "Date",
            selector: (row) => row.date,
            maxWidth: "5%"
          },
          {
            name: "Time",
            selector: (row) => row.started_at,
            maxWidth: "1%"
          },
    ];
    

    return(
        <div className="flex flex-col w-[800px] h-[400px]">
            
            <DataTable
                columns={columns}
                data={data}
                direction="auto"
                fixedHeaderScrollHeight="300px"
                responsive
                subHeaderAlign="right"
                subHeaderWrap
                // pagination
                paginationPerPage={4}
                // paginationServer={true}
                // paginationComponentOptions={}
            />
            <Pagination setEventPagination={setData} perpage={perpageState}/>
        </div>
    )
}

