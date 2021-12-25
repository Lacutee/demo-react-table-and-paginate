import { useState } from 'react';
import DataTable from 'react-data-table-component';
import Pagination from './pagination';



export default function Movie(){
    const [data, setData] = useState([
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 3,
            title: 'Spiderman',
            year: '2004',
        },
        {
            id: 4,
            title: 'No Way Home',
            year: '2021',
        },
        {
            id: 5,
            title: 'Dune',
            year: '2021',
        },
        {
            id: 6,
            title: 'Red Notice',
            year: '2021',
        },
        {
            id: 7,
            title: 'HawkEye',
            year: '2021',
        },
        {
            id: 8,
            title: 'Eternal',
            year: '2021',
        },
        {
            id: 9,
            title: 'Shang Chi',
            year: '2021',
        },
        {
            id: 10,
            title: 'Free Guy',
            year: '2021',
        },
        {
            id: 11,
            title: 'The Amazing Spiderman',
            year: '2014',
        },
        {
            id: 12,
            title: 'Tenet',
            year: '2020',
        },
        {
            id: 13,
            title: 'Dark Knight',
            year: '2004',
        },
    ])

    // console.log(data)
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
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
                pagination
                paginationPerPage={4}
                paginationServer={true}
                // paginationComponentOptions={}
                paginationComponent={()=>(
                    <Pagination itemsPerPage={4} setItems={setData} items={data}/>
                )}
            />
        </div>
    )
}

