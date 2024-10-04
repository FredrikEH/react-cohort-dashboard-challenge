import { useContext } from 'react'
import PostItem from './PostItem'
import PostCreate from "./PostCreate"
import { PostContext } from '../App'


function PostList(){
    const {posts} = useContext(PostContext)
    
    return(
        <main>
            <PostCreate/>
            <ul>
                {[...posts].reverse().map((post, index) => (
                    <PostItem key={index} post={post}/>
                ))}
            </ul>
        </main>
    )
}

export default PostList