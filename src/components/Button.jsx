import React from "react";

export default function Button(props) {
  let urlName = props.urlName;
	return (
		<>
      <button onClick={(e) => {
        window.location.href = props.url;
        e.preventDefault();
      }}>{urlName}</button>
		</>
	)
}

