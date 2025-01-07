import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"



export default function Navbar(props) {
  
return (
 
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/" >Sail</a>
      <button className="navbar-toggler" type="button"   data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"  ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Home" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"href="/"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
            </a>
            <ul className="dropdown-menu" >
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
          <a href="/" className='nav-link'> 
          <div className="form-check form-switch" onChange={props.toggling} >
           
           <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label" for="flexSwitchCheckDefault">{props.texty}</label>
         </div></a>
         </li>

         <li><div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" id="blue" onClick={(e)=>{props.change(e.target)}} class="btn btn-primary">Blue</button>
  <button type="button" id ="red"  onClick={(e)=>{props.change(e.target)}} class="btn btn-primary">Red</button>
  {/* <button type="button" id="green"  onClick={(e)=>{props.change(e.target)}}  class="btn btn-primary">Green</button>
  <button type="button" id="violet"  onClick={(e)=>{props.change(e.target)}}  class="btn btn-primary">Violet</button>
  <button type="button" id ="orange"  onClick={(e)=>{props.change(e.target)}} class="btn btn-primary">Orange</button>
  <button type="button" id="yellow"  onClick={(e)=>{props.change(e.target)}}  class="btn btn-primary">Yellow</button>
  <button type="button" id="gold"  onClick={(e)=>{props.change(e.target)}}  class="btn btn-primary">Brown</button> */}
</div></li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}


Navbar.defaultProps= {
  title: "Enter the title",
};
