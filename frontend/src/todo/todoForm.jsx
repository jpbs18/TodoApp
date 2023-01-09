import React from "react"
import Grid from "../template/grid"
import Button from "../template/iconButton"

export default props => {

    const keyHandler = e => {
        if(e.key === "Enter"){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }
        if(e.key === "Escape"){
           props.handleClear()
        }
    }

    return(
        <div role="form" className="todoForm">
           <Grid cols="12 9 10">
                <input id="description" 
                        className="form-control" 
                        placeholder="Type here..." 
                        value={props.description} 
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}>
                </input>
           </Grid>

           <Grid cols="12 3 2">
                <Button style="primary" icon="plus" onClick={props.handleAdd}/>
                <Button style="info" icon="search" onClick={props.handleSearch}/>
                <Button style="default" icon="close" onClick={props.handleClear}/>
           </Grid>
        </div>
    )
}