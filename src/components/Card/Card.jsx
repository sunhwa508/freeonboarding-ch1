import React from "react";
import * as Styled from "./style";
import Loader from "../Loader/Loader";

const Card = ({ data, lastElementRef, isLoading }) => {
  return (
    <Styled.Wrapper>
      {isLoading
        ? new Array(10).fill(1).map((_, i) => {
            return <Loader key={i} />;
          })
        : data.map((item, index) => (
            <Styled.CardWrapper key={item.id + index}>
              <div>
                <strong ref={lastElementRef}>Comment Id</strong> <span>{item.name}</span>
              </div>
              <div>
                <strong>Email </strong>
                <span>{item.email} </span>
              </div>
              <div>
                <strong>Comment</strong>
                <p>{item.body}</p>
              </div>
            </Styled.CardWrapper>
          ))}
    </Styled.Wrapper>
  );
};

export default Card;
