import React, { useEffect, useState } from 'react';
import './Learning.css'
import Courses from '../Courses/Courses';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import Courseinfo from '../../Courseinfo/Courseinfo';

const Header = () => {
    return (
        <div>
            <div className='title'>
                <img className='site-logo' src="favicon.ico" alt="" />
                <h1>CODE WITH- TECH MASTER SP</h1>
            </div>
            <h4 className='practice-title mt-3'>Select today's practice</h4>
        </div>
    )
}

const Learning = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Here I use a fake API Link with my own data 
        fetch("courses.json")
            .then(Response => Response.json())
            .then(data => setCourses(data))
    }, []);

    const handleClickToadd = (course) => {
        // console.log(course);
        const newCart = [...cart, course];
        setCart(newCart);

    }




    return (
        <div className='main'>
            <div className='container-fluid'>
                <div className='left-contain'>
                    <Header></Header>
                    <div className="row row-cols-1 mt-3 myCards">
                        {
                            courses.map(course => <Courses
                                course={course}
                                key={course.id}
                                handleClickToadd={handleClickToadd}>
                            </Courses>)
                        }
                    </div>
                </div>

                <div className='right-contain bg-white'>
                    <div className='rightSideData'>
                        {/* name and address  */}
                        <div className="card border-0">
                            <div className="card-body d-flex align-items-center">
                                <img src="favicon.ico" className="profile-pic " alt="..." />
                                <div>
                                    <h5 className="card-title d-inline">Sujoy Paul</h5>
                                    <p className="card-text"><FontAwesomeIcon style={{ color: '#188F64' }} icon={faLocationPin}></FontAwesomeIcon> Panchagarh, BD</p>
                                </div>
                            </div>
                        </div>

                        <Courseinfo time={courses} cart={cart}></Courseinfo>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learning;