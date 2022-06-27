import styled from "styled-components";
import EmojiBoard from "./components/EmojiBoard";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  margin-bottom: 5rem;
`
const Instruction = styled.h2`
  display: flex;
  justify-content: center;
  @media (max-width: 1120px) {
    flex-wrap: wrap;
  }
`

const Emoticon = styled.span`
  font-family: 'Space Mono', monospace;
`

export default function App() {
  return (
    <div>
      <Title>SPAMOJI</Title>
      <EmojiBoard />
      <Instruction>Click or press any key to spam! <Emoticon>ヽ(•̀ω•́ )ゝ</Emoticon></Instruction>
    </div>
  );
}
