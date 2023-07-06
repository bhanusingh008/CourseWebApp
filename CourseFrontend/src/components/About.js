import React, {useEffect} from "react";

const AboutMe=()=>{

    useEffect(()=>{
        document.title = "About"
    })

    return(
        <div style={{marginTop:50, padding:20, textAlign:"center", marginLeft:50, maxHeight:300, fontSize:20}}>
            <p>This Application is used to keep track of your courses.
            <br/> User can perform function like Create, Read, Update, Delete on the courses.</p>
            <p>The data is stored and modified in the database.</p>
        </div>
    );
}

export default AboutMe;