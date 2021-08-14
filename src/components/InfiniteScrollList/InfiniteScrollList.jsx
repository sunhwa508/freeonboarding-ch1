import React, { useCallback, useRef, useState, useEffect } from "react";
import axios from "axios";
import CommentCard from "../CommentCard/CommentCard";
import {BASE_URL, LIMIT_PAGE, LIMIT_COMMENT} from '../../constants'

function InfiniteScrollList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);  

  const observer = useRef();

  const lastElementRef = useCallback(
    node => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${BASE_URL.development}comments?_page=${pageNumber}&_limit=${LIMIT_COMMENT}`)
      .then(res => {
        setTimeout(() => setIsLoading(false), 500);
        setData(prevData => [...prevData, ...res.data]);
        setHasMore(pageNumber !== LIMIT_PAGE);
      })
      .catch(err => {
        console.warn(err);
      });
  }, [pageNumber]);

  return <CommentCard data={data} isLoading={isLoading} lastElementRef={lastElementRef} />;
}

export default InfiniteScrollList;
