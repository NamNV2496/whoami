import React from 'react';
import ReadJson from './ReadJson';

function PostItem() {
  const params = new URLSearchParams(window.location.search);
  const post = params.get("post");
  return (
    <ReadJson file_name={post}></ReadJson>
  );
}

export default PostItem;
