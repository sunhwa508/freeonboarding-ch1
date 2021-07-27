import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import CommentCard from "../CommentCard/CommentCard";

function InfiniteScrollList() {
  const [isLoading, setIsLoading] = useState(true);
  const [commentLists, setCommentLists] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const loader = useRef(null);
  const PAGE_LIMIT = 50;

  const getCommentList = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=10`)
      .then(response => {
        setIsLoading(false);
        setCommentLists(items => [...items, ...response.data]);
        setHasMore(pageNumber !== PAGE_LIMIT);
      })
      .catch(error => console.warn(error));
  };

  useEffect(() => {
    getCommentList();
  }, [pageNumber]);

  const onIntersect = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && hasMore) {
        setPageNumber(prev => prev + 1);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(loader.current);
    return () => observer.disconnect();
  }, [loader]);

  return (
    <>
      <div className="content-container">
        {commentLists.map(item => (
          <CommentCard key={item.id} item={item} />
        ))}
        <div ref={loader} className="loader">
          {isLoading && "Loading..."}
        </div>
      </div>
    </>
  );
}

export default InfiniteScrollList;
