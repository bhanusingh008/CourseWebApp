import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name ,title}){
    return(
        <div style={{textAlign:"center"}}>
            <Card color='light' style={{color:"black", marginTop:-5, borderRadius:0}}>
                <CardBody>
                <h1 className="text-center">Welcome To My Course Application</h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;