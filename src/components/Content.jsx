import React from "react";
import IFrame from "./IFrame";
import Image from "./Image";
import NotSupported from "./NotSupported";
import PropTypes from "prop-types";

function Content({ url, type }) {
  return (
    <>
      {type === "jpg" ? (
        <Image url={url} />
      ) : type === "pdf" || type === "txt" ? (
        <IFrame url={url} />
      ) : (
        <NotSupported url={url} type={type} />
      )}
    </>
  );
}

Content.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
};

export default Content;
