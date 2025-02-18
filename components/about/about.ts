import styled from "styled-components";

export const AboutUsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arial Black';
    font-weight: 600;
`

export const AboutUsTitle = styled.span`
    font-family: 'Jersey 25';
    font-size: 48px;
`

export const AboutUsAllBoxWrapper = styled.div`
    width: 902px;
    height: 167px;
    font-size: 32px;
    text-align:left;
    float: left;
    display:flex;
    margin-top: 18px;
    margin-bottom: 73px;
`

export const AboutUsBoxWrapper = styled.div`
    width: 250px;
    height: 167px;
    margin-right: 76px;
`

export const AboutUsLine = styled.hr`
    width: 250px;
    margin-top: 10px;

`
// 난 천재야!!

export const AboutUsColorTextWrapper = styled.span<{ startColor : string; endColor: string}>`
    font-size: 96px;
    background: linear-gradient(to right, ${(props) => props.startColor}, ${(props) => props.endColor});
    color: transparent;
    background-clip: text;
    
` // 영욱 선배님 좋은 아이디어 props 기억하자

export const AboutUsTextWrapper = styled.div`
    font-size: 28px;
    font-family: 'Bai Jamjuree';
    font-weight: 800;
    text-align: center;
`

export const RecruitingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RecruitingContentWrapper = styled.div`
  height: 908px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const RecruitingTitle = styled.div`
  font-family: 'Jersey 25';
  font-size: 48px;
  margin: 61px 0 73px 0;
`

export const RecruitingContentTitle = styled.div`
  width: 250px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 32px;
  text-align: left;
`;

export const RecruitingContent = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
  text-align: left;
  line-height: 47px;
`;

export const RecruitingLine = styled.hr`
  width: 250px;
  height: 2px;
  background-color: white;
  border: none;
  margin: 12px 0 42px 0;
`;

export const noLineHeight = styled.div`
  line-height: normal;
  margin-bottom: 8px;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  
  :before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('/realFinalImage.png') center center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 1008px;
    opacity: .4;
  }
`;
