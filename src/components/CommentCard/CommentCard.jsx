import React from 'react';
import shortid from 'shortid';
import * as Styled from "./CommentCard.styles";
import Loader from "../Loader/Loader";


const CommentCard = ({ data, lastElementRef, isLoading }) => {
	return (
		<Styled.Wrapper>
			{isLoading
				? new Array(10).fill(1).map((_, i) => {
						return <Loader key={shortid.generate()}/>;
				  })
				: data.map((item) => (
						<Styled.CardWrapper key={shortid.generate()}>
							<p ref={lastElementRef}>Comment Id {item.id}</p>
							<p>Email {item.email}</p>
							<p>Comment</p>
							<p>{item.body}</p>
						</Styled.CardWrapper>
				  ))}
		</Styled.Wrapper>
	);
};

export default CommentCard;
