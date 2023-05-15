import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen my-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg " />
                    <img src={parts} className="w-1/2 border-[8px] border-white absolute -mt-32 ml-56 rounded-lg " />
                </div>
                <div className='lg:w-1/2 ml-12'>
                    <h3 className='text-4xl text-orange-500 font-semibold pb-6'>About Us</h3>
                    <h1 className="text-5xl font-bold w-3/4 leading-[4rem]">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='py-2 '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn mt-4 bg-orange-600 hover:bg-orange-700 outline-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;