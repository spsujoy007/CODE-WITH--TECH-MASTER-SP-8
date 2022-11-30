import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const Courseinfo = ({ cart }) => {

    // console.log('Hello js', cart)

    let timeDuration = 0;
    for (const course of cart) {
        timeDuration = timeDuration + course.time
    }

    const successBtn = () => {
        if (successBtn) {
            console.log(Swal.fire(
                'Good job!',
                'Activity completed!',
                'success'
            ))
        }
    }


    const [breakTime, setBreakTime] = useState('');

    const clickToBreak = (breakTime) => {
        localStorage.setItem('break-item', breakTime);
        setBreakTime(breakTime);
    }
    useEffect(() => {
        const localData = localStorage.getItem('break-item');
        setBreakTime(localData)
    }, [])

    return (
        <div>
            <div className='p-3'>
                <div className="bgAndTxt local-data d-flex justify-content-around ">
                    <div className=" text-center p-3">
                        <h5>Programmig</h5>
                        <p>Hobbies</p>
                    </div>
                    <div className=" text-center p-3">
                        <h5>18</h5>
                        <p>Age</p>
                    </div>
                </div>

                <div className='add-break mt-4'>
                    <h5>Add a break</h5>
                    <div className='break-times d-flex justify-content-around mt-4 bgAndTxt p-3'>

                        <button onClick={() => clickToBreak(10)} className='bg-primary border-0 p-2 text-white rounded-3'> <span>10</span>s</button>
                        <button onClick={() => clickToBreak(20)} className='bg-primary border-0 p-2 text-white rounded-3'> <span>20</span>s</button>
                        <button onClick={() => clickToBreak(30)} className='bg-primary border-0 p-2 text-white rounded-3'> <span>30</span>s</button>
                        <button onClick={() => clickToBreak(40)} className='bg-primary border-0 p-2 text-white rounded-3'> <span>40</span>s</button>
                    </div>
                </div>
                {/* <button onClick={() => clickToBreak(cart)} className='bg-primary border-0 p-2 text-white rounded-3'>10s</button> */}

                {/* Practice details  */}
                <div className='practice-details pt-4'>
                    <h5>Practice details</h5>
                    <div className=' mt-4 bgAndTxt p-3 rounded-3 d-flex justify-content-between'>
                        <h6>Learning time </h6> <h6><span className='text-primary'>{timeDuration}<small> hours</small></span></h6>
                    </div>
                    <div className=' mt-1 bgAndTxt p-3 rounded-3'>
                        <h6>Break time {breakTime} seconds </h6>
                    </div>
                </div>

                {/* complete button  */}
                <button onClick={successBtn} className='w-100 mt-3 btn btn-primary p-3'>Activity Completed</button>

            </div>
        </div>
    );
};

export default Courseinfo;