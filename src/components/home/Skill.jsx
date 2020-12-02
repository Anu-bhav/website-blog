import React /* , { useState, useEffect, useCallback } */ from "react";
/* import axios from "axios";
import ProjectCard from "./ProjectCard"; */
import { skills } from "../../editable-stuff/configurations.json";


const Skill = () => {
  return (
    <div className="p-5">
      <div id="skills" className="jumbotron jumbotron-fluid bg-transparent m-0">
        <div className="container container-fluid p-5">
          <h1 className="display-4 mb-5 text-center">Skills</h1>
          <div className="row">

            {skills.map((skill) => (
              <div key={skill.id} className="card-columns d-flex justify-content-center col-6 col-md-3 mb-4" style={{ width: "auto" }}>
                <div className="card shadow-lg p-2 mb-1 bg-white rounded">
                  <h4 className="card-title text-center">{skill.skillName}</h4>
                  <img src={require(`../../editable-stuff/images/${skill.imageUrl}`)} alt="" className="img-fluid card-img mx-auto d-block" style={{ "objectFit": "cover", width: "225px", height: "225px" }} />
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
