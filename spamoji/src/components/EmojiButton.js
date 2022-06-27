import React from "react";
import styled from "styled-components";

// make a div accessible and act like a html button
const AriaDiv = ({ className, children, onClick, onKeyDown }) => {
  return (
    <div
      role="button"
      aria-pressed="true"
      tabIndex="0"
      className={className}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
};

const EmojiButton = styled(AriaDiv)`
  padding: 1rem;
  margin: 1rem;
  width: fit-content;
  cursor: pointer;
  /* when we add hover effect it'll have a smooth transition effect */
  transition: box-shadow 0.3s ease;
  /* $ - apply property to the current element */
  &:hover {
    box-shadow: 0px 4px 10px rgba(26, 30, 33, 0.2);
  }
`;

export default EmojiButton;
