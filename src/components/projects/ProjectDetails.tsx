import React from "react";

const ProjectDetails = (props: any) => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quia accusantium minima, nobis eaque porro labore molestias tenetur
            officia magni, reprehenderit fugit nostrum enim expedita repellendus
            sequi, voluptas quos. Corrupti!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Shane Smith</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
