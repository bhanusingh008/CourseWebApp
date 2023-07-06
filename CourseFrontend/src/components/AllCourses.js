import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import './style.css';

const AllCourses=()=>{

    useEffect(()=>{
        document.title = "View Courses";
    });

    //function to call server

    const GetAllCourses=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response.data);
                setCourse(response.data);
            }
        );
    }

    // calling loading course function using useEffect.

    useEffect(()=>{
        GetAllCourses();
    }, []);

    const [course, setCourse] = useState([]);

    return(
        <div className="work">
            {
                course.length > 0 ? course.map((item) => <Course id = {item.id} title={item.title} description={item.description} />) : "No Course"
            }
        </div>
    );
}

export default AllCourses;