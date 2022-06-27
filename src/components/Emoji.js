import styled from "styled-components";
import EmojiWrapper from "./EmojiWrapper";

// styled components:
// name the constant and set it equal to `styled...`
// after `styled`, pass in either an html tag (styled.div) or a react componennt (styled.(component)) with two backticks
// write css in between the backticks
const Emoji = styled(EmojiWrapper)`
  /* check to see if props.size is given, if not use the fallback of 1 rem */
  font-size: ${({ size }) => (size ? size : "1rem")};
`;

export default Emoji;
