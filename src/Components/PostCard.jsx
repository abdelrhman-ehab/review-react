import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import image from "../assets/profile.jpg";
export default function PostCard({ post }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <div className="w-7/8 sm:w-3/4 md:w-lg lg:w-3xl mx-auto mt-5">
        <div>
          <div className="bg-gray-900 text-white rounded-md shadow-md py-3 px-3 my-5">
            {/* Header */}
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <img
                  className="rounded-full w-10 aspect-square mr-2 p-0.5 bg-white"
                  src={post.user?.photo}
                  alt=""
                />
                <div>
                  <h3 className="font-semibold">{post.user?.name}</h3>
                  <small>
                    {post.createdAt
                      .split(".")
                      .slice(0, 1)
                      .join("")
                      .replace("T", " ")}
                  </small>
                </div>
              </div>
            </div>

            {/* Body */}
            <p className="my-2">{post.body}</p>

            {post.image && (
              <img
                className="w-full h-80 object-cover rounded-md"
                src={post.image}
                alt="post image"
              />
            )}

            {/* Reactions */}
            <div className="flex items-center justify-between my-3 text-gray-400">
              <p className="mr-4">8 likes</p>
              <p
                className="cursor-pointer"
              
                onClick={() =>{
                      {
                    !pathname.includes("details") &&  navigate("post-details/" + post._id)
                }
                }}
              >
                {post.comments?.length || 0} comments
              </p>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-3 border-t border-gray-700 pt-3">
              <button className="flex justify-center items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                Like
              </button>
              <button className="flex justify-center items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                Comment
              </button>
              <button className="flex justify-center items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                Share
              </button>
            </div>

            {/* 1st comment */}
            {pathname.includes("details") ? (
              post.comments.map((comment) => (
                <div key={comment._id} className="bg-gray-800 mt-3 -mx-3 -mb-3 rounded-b-lg p-3 space-y-2 text-sm border-b border-gray-700">
                  <div className="flex items-center">
                    <img
                      onError={(e) => (e.target.src = image)}
                      className="rounded-full w-8 aspect-square mr-2 p-0.5 bg-white"
                      src={comment?.commentCreator?.photo}
                      alt="profie image"
                    />
                    <div>
                      <h3 className="font-semibold">{post.user?.name}</h3>
                    </div>
                  </div>
                  <p>{comment.content}</p>
                </div>
              ))
            ) : (
              <div className="bg-gray-800 mt-3 -mx-3 -mb-3 rounded-b-lg p-3 space-y-2 text-sm">
                <div className="flex items-center">
                  <img
                    onError={(e) => (e.target.src = image)}
                    className="rounded-full w-8 aspect-square mr-2 p-0.5 bg-white"
                    src={post.comments[0]?.commentCreator?.photo}
                    alt="profie image"
                  />
                  <div>
                    <h3 className="font-semibold">{post.user?.name}</h3>
                  </div>
                </div>
                <p>{post.comments[0]?.content}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
