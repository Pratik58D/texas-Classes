import React from "react";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Project Details</h2>
      <p>You are viewing project with ID: {id}</p>
    </div>
  );
};

export default Project;

