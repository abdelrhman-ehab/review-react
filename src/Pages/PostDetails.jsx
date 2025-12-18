import React, { useEffect, useState } from "react";
import { getPostAPi } from "../API_Requests/API_Requests";
import { useParams } from "react-router-dom";
import PostCard from "../Components/PostCard";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  async function getPost() {
    let response = await getPostAPi(id);
    console.log(response.post);

    setPost(response.post);
  }
  useEffect(() => {
    getPost();
  }, []);

  return <>{
    post && <PostCard post={post} />
    }</>;
}
