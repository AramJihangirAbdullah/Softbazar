import React from 'react'
import { styled } from '@mui/material/styles';
import Ratinga from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
const Rating = ({rate}) => {
  const StyledRating = styled(Ratinga)({
    '& .MuiRating-iconFilled': {
      color: 'var(--orange)',
    },
  });
    return (
        <StyledRating
        name="customized-color"
        defaultValue={rate}
        precision={0.1}
        readOnly
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        style={{margin:'0 20px',color:'var(--orange)' ,padding:'6px 0'}}
      />
    )
}

export default Rating
