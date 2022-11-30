import React from 'react';

const Question = () => {
    return (
        <div className='container mt-5 pt-5'>
            <h1 className='text-center'>Important questions</h1>
            <div>
                <h5 className="text-danger">1. How does React Works ?</h5>
                <p>
                    React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM <br /> <br />


                    ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
                </p>
                <br />

                <h5 className="text-danger">2.Difference between Props and state ?</h5>
                <p>
                    <b>State:</b> State is the local state of the component which cannot be accessed and modified outside of the component <br />


                    <b>Props:</b> Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                </p> <br />

                <h5 className="text-danger">3. UseEffect api data without many working in ReactJs ?</h5>
                <p>
                    The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. useEffect= function and dependency
                    <br /> <br />

                    More information useEffect:But wait!! It keeps counting even though it should only count once! useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. This is not what we want. There are several ways to control when side effects run. We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array
                </p>
            </div>
        </div>
    );
};

export default Question;