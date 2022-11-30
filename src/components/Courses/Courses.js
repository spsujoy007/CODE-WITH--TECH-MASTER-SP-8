
import './Courses.css'

const Courses = ({ course, handleClickToadd }) => {

    // const handleClickToadd = props.handleClickToadd
    const { description, img, title, time, module } = course;
    return (
        <div className='col'>
            <div className="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <p className='fw-bold mb-0'>Total video: {module} </p>
                    <p className='fw-bold mt-1'>Time required: <span className='text-primary'>{time} hours</span> </p>
                </div>
                <button onClick={() => handleClickToadd(course)} className='btn bg-primary text-white'>Add to List</button>
                {/* <Courseinfo time={course}></Courseinfo> */}
            </div>
        </div>
    );
};

export default Courses;