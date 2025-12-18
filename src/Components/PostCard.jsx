import React, { useContext } from 'react'
import { MyContext } from '../Context/context'
import Skelton from './Skelton'

export default function PostCard() {
    const { allPosts } = useContext(MyContext)
    return (
        <>
            <div className="w-7/8 sm:w-3/4 md:w-lg lg:w-3xl mx-auto">
                {(!allPosts || allPosts.length < 1) ? <Skelton /> : allPosts.map(post => (
                    <div key={post._id}>
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
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <p className="my-2">{post.body}</p>

                            {post.image && (
                                <img
                                    className="w-full h-100 object-cover rounded-md"
                                    src={post.image}
                                    alt=""
                                />
                            )}

                            {/* Reactions */}
                            <div className="flex items-center justify-between my-3 text-gray-400">
                                <p className="mr-4">8 likes</p>
                                <p>{post.comments?.length || 0} comments</p>
                            </div>

                            {/* Actions */}
                            <div className="grid grid-cols-3 border-t border-gray-700 pt-3">
                                <button className="flex justify-center items-center gap-2 text-gray-400 hover:text-white">
                                    Like
                                </button>
                                <button className="flex justify-center items-center gap-2 text-gray-400 hover:text-white">
                                    Comment
                                </button>
                                <button className="flex justify-center items-center gap-2 text-gray-400 hover:text-white">
                                    Share
                                </button>
                            </div>

                            {/* 1st comment */}
                            {post.comments[0]?.content ?
                                <div className="bg-gray-800 mt-3 -mx-3 -mb-3 rounded-b-lg p-3 space-y-2 text-sm">
                                    <div className="flex items-center">
                                        <img
                                            className="rounded-full w-8 aspect-square mr-2 p-0.5 bg-white"
                                            src={post.user?.photo}
                                            alt=""
                                        />
                                        <div>
                                            <h3 className="font-semibold">{post.user?.name}</h3>
                                        </div>
                                    </div>
                                    <p>{post.comments[0]?.content}</p>
                                </div> : null
                            }
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
