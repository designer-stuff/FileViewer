import React from "react";
import PropTypes from "prop-types";
import "../css/file.css";

function NotSupported({ url, type }) {
  return (
    <div className="file">
      The viewer can't open .{type} files. <br />
      <a href={url}>Download to view</a>
    </div>
  );
}

NotSupported.propTypes = {};

export default NotSupported;
