import { useState, useEffect, createContext } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import PostList from './components/PostList'
import PostView from './components/PostView'
import {Route, Routes} from 'react-router-dom'

export const PostContext = createContext()

function App() {
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])
  const [comments, setComments] = useState([])
  const [post, setPost] = useState(null)

  const getPosts = async() => {
      const response = await fetch("https://boolean-uk-api-server.fly.dev/FredrikEH/post")
      const data = await response.json()
      setPosts(data)
  }

  const getContacts = async() => {
    const response = await fetch("https://boolean-uk-api-server.fly.dev/FredrikEH/contact")
    const data = await response.json()
    setContacts(data)
  }

  const getComments = async(id) => {
    const response = await fetch(`https://boolean-uk-api-server.fly.dev/FredrikEH/post/${id}/comment`)
    const data = await response.json()
    setComments(data)
  }

  const createPost = async(post) => {
    await fetch(
      "https://boolean-uk-api-server.fly.dev/FredrikEH/post",
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(post)
      }
    )
    getPosts()
  }

  useEffect(() => {
      getPosts()
      getContacts()
  }, [])

  if(posts.length === 0 || contacts.length === 0){
    return(
      <div>Loading...</div>
    )
  }

  const PostValue = {posts, setPosts, post, setPost, createPost, contacts, setContacts, comments, setComments, getComments}

  return (
    <>
      <body>
        <Header/>
        <Section/>
        <PostContext.Provider value={PostValue}>
          <Routes>
            <Route path="/" element={<PostList/>} />
            <Route path="/post/:id" element={<PostView/>} />
          </Routes>
        </PostContext.Provider>
      </body>
    </>
  )
}

export default App
