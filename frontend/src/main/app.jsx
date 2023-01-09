import React from "react"
import Routes from "./routes"
import Menu from "../template/menu"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "../template/custom.css"

export default () => {
    return(
        <div className="container-fluid">
            <Menu />
            <Routes />
        </div>
    )
}