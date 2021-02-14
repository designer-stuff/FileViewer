import React from "react";
import { Delete, GetApp } from "@material-ui/icons";
import PropTypes from "prop-types";
import "../css/actionBtn.css";

function ActionBtn({ onDelete, onDownload }) {
  return (
    <div className="btn-container">
      <button className="btn delete" onClick={onDelete} title="Delete">
        <Delete />
      </button>
      <button className="btn download" onClick={onDownload} title="Download">
        <GetApp />
      </button>
    </div>
  );
}

ActionBtn.propTypes = {
  onDelete: PropTypes.func,
  onDownload: PropTypes.func,
};

export default ActionBtn;
