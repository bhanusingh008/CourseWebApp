import React, { useEffect } from "react";
import linkedin from "./LinkedIn_icon_circle.svg.png";
import github from "./images.png";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import profile from "./profile.jpg";


const Contact=()=>{

    useEffect(()=>{
        document.title = "Contact Me"
    })

    return(
        <div style={{display:"flex", flexDirection:"row", marginLeft:50, justifyContent:"center"}}>
        <div style={{marginTop:75}}>
            <img src={profile} style={{width:175, borderRadius:1000, marginRight:100, height:175}}></img>
        </div>
        <ListGroup style={{marginTop:50, display:"flex", flexDirection:"column"}} className="text-center">
            <h2>
                Reach Out On:
            </h2>
            <div>
            <Link className="list-group-item" to="https://www.linkedin.com/in/bhanusingh0605/" style={{color:"green", marginTop:10}} target="_blank">
                <img src={linkedin} style={{width:20, marginRight:5}}></img>
                linkedin
            </Link>
            <br />
            <Link className="list-group-item" to="https://github.com/bhanusingh008" style={{color:"green", marginTop:10}} target="_blank">
                <img src={github} style={{width:25, marginRight:5}}></img>
                github
            </Link>
            </div>

        </ListGroup>
        </div>
    )
}

export default Contact;