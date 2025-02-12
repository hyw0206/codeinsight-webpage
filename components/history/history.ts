import styled from 'styled-components';

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const ApplyButton = styled.button`
  width: 283px;
  height: 65px;
  background-color: #d9d9d9;

  border-radius: 1.5rem;

  font-size: 24px;
  text-align: center;
  color: #000000;
  font-family: 'Roboto';
  font-weight: 600;

  cursor: pointer;
`
export const HistoryArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 117px;
`

export const HistoryLine = styled.hr`
  width: 0px;
  height: 1200px;
  border: 1px solid #FFFFFF;
  
`

// 제발 조용히 해 컴파일러야야
interface CircleProps {
  top?: string | number;
  color?: string;
}

export const Circle = styled.div<CircleProps>`
  position: absolute;
  top: ${(props) => props.top && props.top};
  width: 13px;
  height: 13px;
  background-color: ${(props) => props.color && props.color};
  border-radius: 6px;
`

interface ImageProps {
  top?: string | number;
  left?: string | number;
  right?: string | number;
}

export const BGImage = styled.img<ImageProps>`
  position: absolute;
  top: ${(props) => props.top && props.top};
  left: ${(props) => props.left ? props.left : 0};
`
interface ArticleProps {
  top?: string | number;
  left?: string | number;
  align?: string;
  big?: boolean;
}
export const Article = styled.div<ArticleProps>`
  position: absolute;
  width: ${(props) => props.big ? '373px' : '320px'};
  top: ${(props) => props.top ? props.top : 0};
  left: ${(props) => props.left ? props.left : 0};
  text-align: ${(props) => props.align && props.align}
  h1 {
    font-size: 36px;
    font-family: 'Roboto';
    font-weight: 600;
  }
  p {
    font-size: 16px;
    font-family: 'Roboto';
    font-weight: 400;
    line-height: 23px;
  }
  `