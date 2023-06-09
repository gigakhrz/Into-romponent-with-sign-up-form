import { styled } from "styled-components";

const Description = (): JSX.Element => {
  return (
    <DescriptionContainer>
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{" "}
      </p>
    </DescriptionContainer>
  );
};

export default Description;

const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  max-width: 525px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.29px;
    color: white;
    text-align: center;
    @media screen and (min-width: 1024px) {
      font-size: 50px;
      font-weight: 700;
      line-height: 55px;
      letter-spacing: -0.52px;
      text-align: left;
    }
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    color: white;
    text-align: center;
    @media screen and (min-width: 1024px) {
      text-align: left;
    }
  }
`;
