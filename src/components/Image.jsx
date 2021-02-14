import React from "react";
import PropTypes from "prop-types";
import "../css/image.css";

function Image({ url }) {
  return (
    <div className="pic">
      <img src={url} />
    </div>
  );
}

Image.propTypes = {
  url: PropTypes.string,
};

export default Image;
