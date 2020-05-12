import React from"react"
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from "@material-ui/core";



function Search(props){

    return(
        <div>
        <center>
        <form onSubmit={props.getweather}>
        <TextField name="city" type="text"  placeholder="Enter City" autoComplete="off"  spellCheck="false" InputProps={{endAdornment: (
        <InputAdornment position="start">
        <SearchIcon />
        </InputAdornment>
        )
        }}></TextField>
        </form>
        </center>
        </div>
    )
}

export  default Search;