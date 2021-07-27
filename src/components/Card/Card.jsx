import React from "react";
import * as Styled from "./style";

const Card = ({ commentLists, lastElementRef }) => {
  return (
    <Styled.Wrapper>
      {commentLists.map(item => (
        <Styled.CardWrapper key={item.id}>
          <div ref={lastElementRef}>
            <strong>Comment Id</strong>
            <span> {item.id}</span>
          </div>
          <div>
            <strong>Email </strong>
            <span>{item.email} </span>
          </div>
          <strong>Comment</strong>
          <br />
          <span>{item.body}</span>
        </Styled.CardWrapper>
      ))}
    </Styled.Wrapper>
  );
};

export default Card;
