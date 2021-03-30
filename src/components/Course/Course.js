import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'  
import './/Course.css'

const Course = (props) => {
    console.log(props.course.course_title);
    const {img, course_title, course_price, seat} = props.course; 
    return (
        <div className="course">
            <div>
               <img src={img} alt=""/>
            </div>
            <div>
               <h4 className="course-name">{course_title}</h4>
               <br/>
               <p>Price: ৳ {course_price}</p>
               <p>Only {seat} seat left - Enroll Soon</p>
            <button 
                  className="main-button"
                  onClick = {() => props.handleAddCourse(props.course)}
              >ENROLL NOW
            </button>
            </div>
           
        </div>
    );

};

export default Course;