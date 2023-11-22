// app/display/page.js

"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    type: '',
    about: '',
    phone: '',
    email: '',
    linkedin: '',
    skype: '',
    address: '',
    school: '',
    passyear: '',
    Bdepartment: '',
    Bgraduation: '',
    Bcollege: '',
    Buniversity: '',
    Mdepartment: '',
    Mgraduation: '',
    Mcollege: '',
    Muniversity: '',
    office: '',
    position: '',
    project: '',
    skill: '',
    letter: '',
    
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const storedFormData = JSON.parse(localStorage.getItem('formData')) || {};

        
        setUserData({
          name: storedFormData.name || '',
          type: storedFormData.type || '',
          about: storedFormData.about || '',
          phone: storedFormData.phone || '',
          email: storedFormData.email || '',
          linkedin: storedFormData.linkedin || '',
          skype: storedFormData.skype || '',
          address: storedFormData.address || '',
          school: storedFormData.school || '',
          passyear: storedFormData.passyear || '',
          Bdepartment: storedFormData.Bdepartment || '',
          Bgraduation: storedFormData.Bgraduation || '',
          Bcollege: storedFormData.Bcollege || '',
          Buniversity: storedFormData.Buniversity || '',
          Mdepartment: storedFormData.Mdepartment || '',
          Mgraduation: storedFormData.Mgraduation || '',
          Mcollege: storedFormData.Mcollege || '',
          Muniversity: storedFormData.Muniversity || '',
          office: storedFormData.office || '',
          position: storedFormData.position || '',
          project: storedFormData.project || '',
          skill: storedFormData.skill || '',
          letter: storedFormData.letter || '',
         
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="body grid min-h-screen place-items-center bg-gray-400">
      <div className="main m-4 h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white p-8 shadow-lg">

      {/* <h1 className="text-3xl font-bold mb-4">User Details</h1> */}
      <div>
      <nav className='navbar relative bg-sky-900 h-[200px] z-1000 w-full'>
      <h1 className="name-1 font-bold absolute top-[20px] left-[390px] text-[40px] text-white"> {userData.name}</h1>
      <h2 className="name-2 absolute top-[90px] left-[390px] text-[35px] text-white"> {userData.type}</h2>
      </nav>
      </div>

      <div className="div-2 absolute top-[300px] left-[800px] w-[300px]">
      <h3 className="div1-h3 font-bold text-blue-600 underline">ABOUT ME</h3>
      <p className="div1-h3 ">{userData.about}</p>
      </div>

      <div className="div-3 absolute top-[300px] left-[400px] w-[300px]">
      <h3 className="div2-h3 font-bold text-blue-600 underline">CONTACT</h3>
      <ul>
        <li className=''><b>Mobile:- </b>{userData.phone}</li>
        <li className=''><b>Email:- </b>{userData.email}</li>
        <li className=''><b>Linkedin:- </b>{userData.linkedin}</li>
        <li className=''><b>Skype:- </b>{userData.skype}</li>
        <li className=''><b>Address:- </b>{userData.address}</li>
      </ul>
      </div>

      <div className="div-5 absolute top-[550px] left-[400px]">
      <h3 className="div4-h3 font-bold text-blue-600 underline">EDUCATION BACKGROUND</h3>
      
      <ul>
        <li><b>{userData.school}</b></li>
        <li><b>12th pass {userData.passyear}</b></li>
        <li><b>{userData.Bdepartment}</b></li>
        <li><b>{userData.Bgraduation}</b></li>
        <li><b>{userData.Bcollege}</b></li>
        <li><b>{userData.Buniversity}</b></li>
        <li><b>{userData.Mdepartment}</b></li>
        <li><b>{userData.Mgraduation}</b></li>
        <li><b>{userData.Mcollege}</b></li>
        <li><b>{userData.Muniversity}</b></li>
      </ul>
      </div>
      <div className="div-6 absolute top-[550px] left-[800px]">
      <h3 className="div3-h3 font-bold text-blue-600 underline">EXPERIENCE</h3>
      <p className="font-semibold"> {userData.office}</p>
      <p className="font-semibold"> {userData.position}</p>
      </div>

      <div className="div-6 absolute top-[680px] left-[800px]">
      <h3 className="div5-h3 font-bold text-blue-600 underline">PROJECT</h3>
      <p className="font-semibold">{userData.project}</p>
      </div>

      <div className="div-7 absolute top-[880px] left-[400px] w-[300px]">
      <h3 className="div6-h3 font-bold text-blue-600 underline">SKILLS</h3>
      <p className="font-semibold">{userData.skill}</p>
      </div>

      <div className="div-8 absolute top-[880px] left-[800px] w-[300px]">
      <h3 className="div7-h3 font-bold text-blue-600 underline">DECLARATION</h3>
      <p className="font-semibold">{userData.letter}</p>
      </div>

      
    </div>
    </div>
  );
}

export default Page;
