import { useContext, useState } from "react"
import CommentItem from "./CommentItem"
import { PostContext } from "../App"

function CommentList({id}){
    const {comments, getComments} = useContext(PostContext)

    useState(() => {
        getComments(id)
    }, [id, getComments])

    return(
        <div> 
            <ul>
                {comments && comments.map((comment, index) => (
                    <CommentItem key={index} comment={comment}/>
                ))}
            </ul>
        </div>
    )
}

export default CommentList