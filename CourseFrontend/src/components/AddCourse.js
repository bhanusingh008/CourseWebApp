import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Container} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import AllCourses from "./AllCourses";
import Course from "./Course";
import Button from '@mui/material/Button';

const AddCourse=()=>{

    useEffect(()=>{
        document.title = "Add Course"
    }, []);

    const [course, setCourse] = useState({});
    //form handler function

    const handleForm=(e)=>{
        console.log(course);
        post_course(course);
        e.preventDefault();
    }

    // function to post data to server

    const post_course=(data)=>{
        axios.post(`${base_url}/courses`, data).then(
            (response)=>{
                console.log(response);
                alert('Course Added');
            }, 
            (error)=>{
                alert("Not appropriate values.");
                console.log(error);
            }
        );
    };
    return(
        <div>
            <Container style={{display:"flex",marginTop:50, padding:20, marginLeft:50, flexDirection:'column'}}>
            <form onSubmit={handleForm}>
            <TextField fullWidth id="Course_id" label="Course ID" variant="outlined" margin='dense' onChange={(e)=>{
                        
                        setCourse({...course, id: e.target.value})
                    }} 
            />

            <TextField fullWidth id="Course_name" label="Course Name" variant="outlined" margin='dense' onChange={(e)=>{
                        
                        setCourse({...course, title: e.target.value})
                    }}    
            />

            <TextField fullWidth id="Course_desc" label="Course Description" variant="outlined" margin='dense' onChange={(e)=>{
                        
                        setCourse({...course, description: e.target.value})
                    }}
            />
            <Button variant='contained' type='submit' color='success'>Add Course</Button>
            </form>
            </Container>
        </div>
    )
}
export default AddCourse;
