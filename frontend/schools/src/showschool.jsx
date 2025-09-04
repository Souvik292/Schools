import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/schools")
      .then(res => setSchools(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <a href="/" className="bg-white text-xl">home</a>
      <h1 className="text-black text-center">Show Schools</h1>
    <div className="h-screen grid grid-cols-1 bg-green-300  w-full  md:grid-cols-3 gap-6 p-6 ">
      {schools.map(school => (
        <div key={school.id} className="border h-[400px] p-4 bg-white shadow-lg rounded-lg">
          <img src={`http://localhost:5000${school.image}`} alt={school.name} className="h-60 w-full object-contain no-repeat rounded"/>
          <h3 className="text-xl font-bold mt-2">NAME:{school.name}</h3>
          <p>ADDRESS:{school.address}</p>
          <p> CITY:{school.city}</p>
          <p>STATE:{school.state}</p>
          <p> CONTACT:{school.contact}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
