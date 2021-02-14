import React from "react";
import PropTypes from "prop-types";
import "../css/thumbnail.css";

function Thumbnail({ url, select, index, active }) {
  const style = index == active ? "thumbnail active" : "thumbnail";
  return (
    <div className={style} onClick={select}>
      <img src={url} data-index={index} />
    </div>
  );
}

Thumbnail.propTypes = {
  url: PropTypes.string,
  select: PropTypes.func,
  index: PropTypes.number,
};

export default Thumbnail;
