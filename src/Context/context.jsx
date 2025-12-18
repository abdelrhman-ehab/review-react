import React, { Children, createContext, useEffect, useState } from 'react'
import { getAllPostsAPi } from './../API_Requests/API_Requests';
export const MyContext = createContext()

export default function MyContextProvider({ children }) {
    const [allPosts, setAllPosts] = useState([])

    async function getAllPosts() {
        const response = await getAllPostsAPi()
        setAllPosts(response.posts)      
    }

    useEffect(()=>{
        getAllPosts()
    },[])
    
    return (
        <MyContext.Provider value={{allPosts}}>
            {children}
        </MyContext.Provider>
    )
}
