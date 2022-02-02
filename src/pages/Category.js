import React, {useState} from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Star from '@mui/icons-material/Star';
import Arrowup from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import useFetch from '../components/customHooks/useFetch'
import '../css/category.css'
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Paginatoin';
const Category = () => {
  // Pagination
  let [page, setPage] = useState(1);
  const p = page; // for changing the page
  const PER_PAGE = 10; //num of products shown per page

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 290,
      },
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  // clicking on btn filter
    const handleFilter = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleCloseFilter = () => {
      setAnchorEl(null);
    };
  
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    const handleFilterbtn =()=>{setAnchorEl(null)}
    
// sorting
  const [anchorEls, setAnchorEls] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEls(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEls(null);
  };

  const opens = Boolean(anchorEls);
  const ids = opens ? 'simple-popover' : undefined;

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event,index) => {
    setSelectedIndex(index);
  };

// fetching
const url = 'https://fakestoreapi.com/products'
const { response, loading, error } = useFetch(url)
console.log(response );

// rating
    const [rating, setRating] = React.useState('');

    const handleChange = (event) => {
      setRating(event.target.value);
    };

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const [personName, setPersonName] = React.useState([]);

  const handleBrand = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
    return (
        <div className="workarea">
          <div className="filsort">
              <div className="filter">
              <Button className="filsortbtn" sx={{ minWidth: 0.99/1 , m : 1,bgcolor:"var(--orange)"}} aria-describedby={id} variant="contained" onClick={handleFilter}>
                Filter
              </Button>
              <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleCloseFilter}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              >
                  <Typography  sx={{width: "38vw", m: 1,p:1}}>
                    <Grid container spacing={1}>
                      <Grid xs={12}>
                        <Box sx={{ m : 1}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={rating}
                                label="Rating"
                                onChange={handleChange}
                                >
                                <MenuItem value={1}><Star/><Arrowup/></MenuItem>
                                <MenuItem value={2}><Star/><Star/><Arrowup/></MenuItem>
                                <MenuItem value={3}><Star/><Star/><Star/><Arrowup/></MenuItem>
                                <MenuItem value={4}><Star/><Star/><Star/><Star/><Arrowup/></MenuItem>
                                <MenuItem value={5}><Star/><Star/><Star/><Star/><Star/></MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                      </Grid>
                      <Grid xs={12}>
                      <Box sx={{m : 1}}>
                        <FormControl fullWidth >
                            <InputLabel  id="demo-multiple-checkbox-label">Brands</InputLabel>
                            <Select
                            sx={{minWidth: 150,width:1/1}}
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={personName}
                            onChange={handleBrand}
                            input={<OutlinedInput label="Brands" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                            >
                            {names.map((name) => (
                              <MenuItem key={name} value={name}>
                                <Checkbox checked={personName.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        </Box>
                      </Grid>
                      <Grid xs={12} sx={{ m : 1}}>
                        <fieldset style={{border:'1px #ccc solid'}}>
                          <legend>&nbsp;Money&nbsp;</legend>
                          <TextField type="number" label="Min" sx={{width: 80,m:1}}  />
                          <TextField type="number" label="Max" sx={{width: 80,m:1}}  />
                        </fieldset>
                      </Grid>
                      <Grid xs={12} sx={{ m : 1}}>
                        <Button sx={{ minWidth: 1/1 , m : 1,bgcolor:"var(--orange)"}} variant="contained" onClick={handleFilterbtn}>
                          search
                        </Button>
                      </Grid>

                    </Grid>
                  </Typography>
              </Popover>
              
              </div>
              <div className="sort">
                <Button className="filsortbtn" sx={{ minWidth: 0.99/1, m: 1,bgcolor:"var(--orange)"}} aria-describedby={ids} variant="contained" onClick={handleClick}>
                  Sort
                </Button>
                <Popover
                  id={ids}
                  open={opens}
                  anchorEl={anchorEls}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Typography sx={{ p: 2 }}>
                    <Box sx={{ width: "38vw"}}>
                      <List component="nav" aria-label="main mailbox folders">
                        <ListItemButton
                          // sx={{width:350}}
                          selected={selectedIndex === 0}
                          onClick={(event) => handleListItemClick(event, 0)}
                        >
                          <ListItemText primary="newest" />
                        </ListItemButton>
                        <ListItemButton
                          selected={selectedIndex === 1}
                          onClick={(event) => handleListItemClick(event, 1)}
                        >
                          <ListItemText primary="Rating" />
                        </ListItemButton>
                      </List>
                    </Box>
                  </Typography>
                </Popover>
            </div>
            </div>
            <div className="products">

              <Grid container
              sx={{width:1/1}}
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}>
              {response.map((product,i)=>{
                if(PER_PAGE*p-PER_PAGE<=i && i<p*PER_PAGE){
                  const {id} = product;
                  console.log(i);
                  return(
                            <Grid className="grid" sx={{p:0}} key={id}
                            item xs={3} >
                              <ProductCard  product={product} loading={loading} error={error}/>
                            </Grid>
                        )
                }else return
                    })}
                  <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" >
                    <Pagination data={response} PER_PAGE={PER_PAGE} page={page} setPage={setPage}/>
                  </Grid>  
              </Grid>
            </div>
                    
                  
        </div>
    )
}


export default Category
