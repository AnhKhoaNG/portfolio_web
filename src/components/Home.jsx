import React from 'react';
import { ReactTyped } from "react-typed";
function Home(){
    return (
        <div className='text-white'>
          <div className='max-w-[1260px] mt-[-150px] w-full h-screen mx-auto text-left flex flex-col justify-center'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-blue-700 '>
              Hello, my name is Anh Khoa Nguyen.
            </h1>
            <div className='flex justify-left items-center'>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>
            I'm a
          </p>
            <ReactTyped
          className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2'
            strings={['university student', 'software engineer']}
            typeSpeed={30}
            backSpeed={30}
            loop
          />
            </div>
            <p className='md:text-2xl text-xl font-bold text-white'>interested on backend + cloud and AI/ML engineer.</p>
            <a href = "Anh_Khoa_Nguyen_resume__2_.pdf" >
            <button className='bg-[#004177] w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-white'>My Resume</button>
            </a>
          </div>
        </div>
      );
    };
export default Home;