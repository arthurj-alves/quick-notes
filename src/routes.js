import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Cadastro from "./Pages/Cadastro"
import Home from "./Pages/Home"
import Login from "./Pages/Login"

function Rota(){
    return(
        <Router>
            <Routes>
                <Route path="/login" element = {<Login/>} />
                <Route path="/cadastro" element = {<Cadastro/>} />
                <Route path="/home" element = {<Home/>} />
            </Routes>
        </Router>
    )
}

export default Rota;