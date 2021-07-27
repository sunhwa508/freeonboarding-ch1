import styled, { keyframes } from "styled-components";

export const Container = styled.li`
  list-style: none;
  margin: 15px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
  width: 500px;
  height: 150px;
`;

const Fade = keyframes`
    \0% {
		transform: translateX(0);
	}
	 \50%{
        transform: translateX(220px);
    }
	 \100% {
		transform: translateX(460px);
	}
`;

export const Content = styled.div`
  width: 100%;
  height: 150px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;
  & :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background: linear-gradient(to right, #ffffff, rgb(211, 200, 200), #f2f2f2);
    animation-name: ${Fade};
    animation: ${Fade} 1s linear infinite;
  }
`;
