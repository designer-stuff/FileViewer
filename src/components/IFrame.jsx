import React from "react";
import PropTypes from "prop-types";
import "../css/iframes.css";

function IFrame({ url, id }) {
  return (
    <div className="frame">
      <iframe className="frame" src={url} title={id}></iframe>
    </div>
  );
}

IFrame.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
};

export default IFrame;
