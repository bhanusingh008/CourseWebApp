import * as React from 'react';
import { useState } from 'react';
import { CardBody, Card, CardSubtitle, CardText, Container} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCourses from "./AllCourses";
import axios from "axios";
import base_url from "../api/bootapi";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Course=({id, title, description})=>{

    const reloadPage = () => {
        window.location.reload()
      }

    const DeleteCourse=()=>{

        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                console.log(response.data);
                reloadPage();
            }
        );
    }

    const [course, setCourse] = useState({});
    //form handler function

    const handleForm=(e)=>{
        console.log(course);
        update_course(course);
        e.preventDefault();
    }

    // function to post data to server

    const update_course=(data)=>{
        axios.post(`${base_url}/courses`, data).then(
            (response)=>{
                console.log(response);
                alert('Course Updated');
                reloadPage();
            }, 
            (error)=>{
                console.log(error);
            }
        );
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    return(
        <>
            <Card style={{height:170, color:"black", marginBottom:10}}>
                <CardBody>
                    <CardSubtitle className="text-center" style={{fontSize:25}}>
                        {title}
                    </CardSubtitle>
                    <CardText className="text-center">{description} <p>Course ID: {id}</p></CardText>
                    <Container className="text-center" style={{padding:10}}>
                    
                    <Button variant="outlined" onClick={handleClickOpen}>
                    Update
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Update</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                    Please Enter the details you desire to update.
                    </DialogContentText>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="course_name"
                    label="Course Name"
                    type="name"
                    fullWidth
                    variant="standard"
                    onChange={(e)=>{
                        
                        setCourse({...course, title: e.target.value, id:id})
                    }}    
                    />
                    <TextField
                    autoFocus
                    margin="dense"
                    id=""
                    label="Description"
                    type="course_desc"
                    fullWidth
                    variant="standard"
                    onChange={(e)=>{
                        
                        setCourse({...course, description: e.target.value})
                    }}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleForm}>Update</Button>
                    </DialogActions>
                    </Dialog>

                        <Button size="sm" variant="outlined" color="error" style={{marginLeft:10}} onClick={DeleteCourse}>Delete</Button>
                    </Container>
                </CardBody>
            </Card>
        </>
    );
}

export default Course;
