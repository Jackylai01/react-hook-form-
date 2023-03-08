import React from "react";

const Header = ({ renderCount }) => {
  return (
    <div>
      <button className="render">Render Counter:{renderCount}</button>
      <header className="header">
        <h1 className="title">
          <span className="main">@</span> React Hook Form
        </h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos
          debitis quia. Voluptatum sed dolor, voluptates tenetur laboriosam
          aliquam perspiciatis quam voluptatibus aut. Vel laudantium neque
          voluptatum natus quae, impedit fugit qui distinctio omnis tempore
          animi obcaecati accusantium facilis, corporis esse perspiciatis odit
          ratione. Quos totam neque quidem ex nisi?
        </p>
      </header>
    </div>
  );
};

export default Header;
