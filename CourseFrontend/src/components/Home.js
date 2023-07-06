import React, {useEffect} from "react";
import { Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () =>{

    useEffect(()=>{
        document.title = "Home";
    }, []);

    return(
        <div style={{marginTop:50, marginLeft:50, padding:50, maxHeight:300, fontSize:20}}>
                <p style={{textAlign:"center"}}>This is a web app developed in the learning stage by Bhanu Singh.</p>
                <p style={{textAlign:"center"}}>To Learn React and importantly create something <br/> full stack on web for the first time.</p>

                <p className="text-center">
                This web application is created using React for Frontend and <br/> Spring Framework is used for the backend.
                </p>
        </div>
    )
}

export default Home;