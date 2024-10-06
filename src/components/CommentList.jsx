import { useState, useEffect } from "react"
import CommentItem from "./CommentItem"

function CommentList({id}){
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function getComments() {
            const response = await fetch(
                `https://boolean-uk-api-server.fly.dev/FredrikEH/post/${id}/comment`
            );
            const data = await response.json();
            setComments(data);
        }
        getComments();
    }, [id]);

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