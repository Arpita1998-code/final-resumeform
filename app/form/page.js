"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

function Page() {
  const router = useRouter();

  const initialFormData = {
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
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || initialFormData;
    setFormData(storedFormData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'file' ? e.target.files[0].name : value;

    const newFormData = {
      ...formData,
      [name]: newValue,
    };
    setFormData(newFormData);
    localStorage.setItem('formData', JSON.stringify(newFormData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    router.push('/display');
  };

  return (
    <div className=" mx-auto max-w-2xl px-4 my-10 flex-col bg-gray-300">
      <h1 className="items-center font-bold text-[40px] text-blue-600">RESUME FORM</h1>
      <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="name">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="type">Type of Job</label>
                <input type="text" name="type" value={formData.type} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="about">About</label>
                <input type="text" name="about" value={formData.about} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="contact">Contact Details</label>  
              </div>
      
              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="phone">Phone Number</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange}/>  
              </div>
      
              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="email">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="linkedin">LinkedIn</label>
                <input type="text" name="linkedin" value={formData.linkedin} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="skype">Skype</label>
                <input type="text" name="skype" value={formData.skype} onChange={handleInputChange}/>  
              </div>
      
              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="address">Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="education">Education Background</label>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="graduation">Graduation</label>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="school">School</label>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="school">Name of School</label>
                <input type="text" name="school" value={formData.school} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="passyear">Year of 12th Pass</label>
                <input type="text" name="passyear" value={formData.passyear} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="Bdepartment">Department</label>
                <input type="text" name="Bdepartment" value={formData.Bdepartment} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="Bgraduation">Year of Graduation</label>
                <input type="text" name="Bgraduation" value={formData.Bgraduation} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="Bcollege">College Name</label>
                <input type="text" name="Bcollege" value={formData.Bcollege} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="Buniversity">University Name</label>
                <input type="text" name="Buniversity" value={formData.Buniversity} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="masters">Masters</label>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="Mdepartment">Department</label>
                <input type="text" name="Mdepartment" value={formData.Mdepartment} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="Mgraduation">Year of Masters</label>
                <input type="text" name="Mgraduation" value={formData.Mgraduation} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="Mcollege">College Name</label>
                <input type="text" name="Mcollege" value={formData.Mcollege} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="Muniversity">University Name</label>
                <input type="text" name="Muniversity" value={formData.Muniversity} onChange={handleInputChange}/>  
              </div>
      
              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="experience">Experience</label>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="skill">Office Name</label>
                <input type="text" name="office" value={formData.office} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="position">Your Position</label>
                <input type="text" name="position" value={formData.position} onChange={handleInputChange}/>  
              </div>

              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="project">Project</label>
                <input type="text" name="project" value={formData.project} onChange={handleInputChange}/>  
              </div>
      
              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="skill">Skills</label>
                <input type="text" name="skill" value={formData.skill} onChange={handleInputChange}/>  
              </div>
      
              <div className="w-full flex flex-col">
                <label className="font-bold text-gray-800" htmlFor="cover letter">Declaration</label>
                <input type="text" name="letter" value={formData.letter} onChange={handleInputChange}/>  
              </div>
      
        <button type="submit" className="submit w-40 items-center bg-yellow-400 font-bold text-teal-800">
          Submit</button>
      </form>
    </div>
  );
}

export default Page;
