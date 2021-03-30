import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Main.css';


const Main = () => {
    const first15 = fakeData.slice(0, 15);
    const [courses, setCourse] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className ="main-container">
            <div className="course-container">
                {
                    courses.map(cour => <Course
                        handleAddCourse = {handleAddCourse}
                        course={cour}>
                        </Course>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Main;