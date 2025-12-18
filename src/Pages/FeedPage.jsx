import React, { useContext } from "react";
import PostCard from "../Components/PostCard";
import { MyContext } from "../Context/context";
import Skelton from "../Components/Skelton";

export default function FeedPage() {
  const { allPosts } = useContext(MyContext);

  return (
    <>
      {allPosts.length > 0 ? (
        allPosts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <Skelton />
      )}
    </>
  );
}
