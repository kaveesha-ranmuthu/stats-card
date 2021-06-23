import React from "react";

const Text = () => {
  return (
    <div id="text-cont">
      <p id="header">
        Get <span id="insights">insights</span> that help your business grow.
      </p>
      <p id="para">
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
      <div id="stats">
        <div>
          <p className="num">10k+</p>
          <p className="word">companies</p>
        </div>
        <div>
          <p className="num">314</p>
          <p className="word">templates</p>
        </div>
        <div>
          <p className="num">12M+</p>
          <p className="word">queries</p>
        </div>
      </div>
    </div>
  );
};

export default Text;
