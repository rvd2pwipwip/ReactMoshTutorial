import React from "react";

const Like = ({ liked, onLike }) => {
  let classes = "fa fa-heart";
  return (
    <i
      className={liked ? classes : `${classes}-o`}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={onLike}
    />
  );
};

export default Like;
