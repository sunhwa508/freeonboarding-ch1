import React from "react";
import * as Styled from "./style";
import Loader from "../Loader/Loader";

const Card = ({ data, lastElementRef, isLoading }) => {
  return (
    <Styled.Wrapper>
      {isLoading
        ? new Array(10).fill(1).map((_, i) => {
            return <Loader />;
          })
        : data.map((item, index) => (
            <Styled.CardWrapper key={item.id_index}>
              <p ref={lastElementRef}>Comment Id {item.name}</p>
              <p>Email {item.email}</p>
              <p>Comment</p>
              <p>{item.body}</p>
            </Styled.CardWrapper>
          ))}
    </Styled.Wrapper>
  );
};

export default Card;
