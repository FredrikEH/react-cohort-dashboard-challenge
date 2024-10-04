function CommentItem({comment}){

    return(
        <li>
            <p>User Name</p>
            <p>{comment.content}</p>
        </li>
    )
}

export default CommentItem