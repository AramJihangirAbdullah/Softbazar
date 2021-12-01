import React , {useState} from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginatoin = ({data, PER_PAGE, page,setPage}) => {
    const count = Math.ceil(data.length / PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        window.scrollTo(0,0)
    };
    return (
        <Stack sx={{m:2}} spacing={2}>
            <Pagination
            page={page}
            count={count} 
            onChange={handleChange} 
            shape="rounded" />
        </Stack>
    )
}

export default Paginatoin
