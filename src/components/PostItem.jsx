import CommentList from "./CommentList"
import {Link} from 'react-router-dom'
import { PostContext } from '../App'
import { useContext, useState, useEffect } from "react"

function PostItem({post}){
    const {contacts, posts, setPost} = useContext(PostContext)
    const [contact, setContact] = useState(null)

    useEffect(() => {
        if (contacts) {
            const matchingContact = contacts.find((c) => c.id === post.contactId)
            setContact(matchingContact)
        }
    }, [contacts, post.contactId])
    
    if(!post || contact === null){
        return <div>Loading...</div>
    }
    console.log(post.id)
    return(
        <li>
            <h2>{contact.firstName.charAt(0)} {contact.lastName.charAt(0)} {contact.firstName} {contact.lastName}</h2>
            <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
            <p>{post.content}</p>
            <CommentList id={post.id}/>
            <input type="text" placeholder="Add a comment..."></input>
        </li>
    )
}

export default PostItem