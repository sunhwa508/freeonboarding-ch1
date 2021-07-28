import React, { useCallback, useRef, useState, useEffect } from "react";

import axios from "axios";
import Card from "../Card/Card";

function InfiniteScrollList() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(50);

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
    setError(false);

    axios
      .get(`https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=10`)
      .then(res => {
        setTimeout(() => setIsLoading(false), 500);
        setData(prevData => [...prevData, ...res.data]);
        setHasMore(pageNumber !== limit);
      })
      .catch(err => {
        console.warn(err);
        setError(true);
      });
  }, [pageNumber]);

  return <Card data={data} isLoading={isLoading} lastElementRef={lastElementRef} />;
}

export default InfiniteScrollList;
