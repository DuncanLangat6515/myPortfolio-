import React, { useEffect, useState } from "react";

function Project() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  const proDetails = projects.map((everyproject) => (
    <>
      <div className="imageCard">
        <h1>{everyproject.name}</h1>
        <img src={everyproject.image } alt="oops"/>
        <br></br> <p>Project I used HTML,CSS and JavaScript</p>

        <a href={everyproject.github}> Show Project</a>
      </div>

    </>
  ));
  return <div className="card">
    {proDetails}
  </div>;
}

export default Project;
