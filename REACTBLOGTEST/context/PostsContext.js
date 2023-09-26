import { createContext , useState , useEffect } from "react";
import {postData} from '../data'
import { useNavigate } from "react-router-dom";
import {format} from  'date-fns'

const PostContext  = createContext({})

export const DataProvider = ({children}) =>{
    const [posts, setPosts] = useState(() => {
        // Get posts from localStorage when component mounts
        const savedPosts = localStorage.getItem('posts');
        return savedPosts ? JSON.parse(savedPosts) : postData;
    });
 const [title,setTitle] = useState('')
 const [postBody , setPostBody] = useState ('')
 const [editPostBody , setEditPostBody] = useState ('')
 const [editPostTitle , setEditPostTitle] = useState ('')
 const [ search ,setSearch] = useState('')
 const [ searchResults ,setSearchResults] = useState([])
const [msg,setMsg] = useState("")
 const [alertStatus,setAlertStatus] = useState(false)
 const [dialogue,setDialogue] = useState(false)
const navigate = useNavigate()




useEffect (()=>{
    const filteredPosts = posts.filter(post=>(
        ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
        ((post.title).toLowerCase()).includes(search.toLowerCase()) 
    ))
    setSearchResults(filteredPosts.reverse())
},[posts,search])







 const handleFormSubmit = (e)=>{
    e.preventDefault()

    const newId  = posts ? posts[posts.length -1 ] + 1 : 1
    const dateTime = format(new Date(),"MMMM dd , yyyy pp ")
    const newPost = {id:newId,title:title,datetime:dateTime,body:postBody}
    const updatedPost =[...posts,newPost]
    setPosts(updatedPost)
    
    if(!title || !postBody){
        setAlertStatus(true)
        setMsg("Please fill the required fields")
        setTimeout (()=>{
            setMsg('')
            setAlertStatus(false)
        },2000)
    }
    else{
        setMsg('new post added successfully  \u{1F60A} ')
        localStorage.setItem('posts', JSON.stringify(updatedPost));
        setTimeout(()=>{
            setMsg('')
            navigate('/')
            setTitle('')
            setPostBody('')
            setAlertStatus(false)
        },2000)
        // Save posts to localStorage
       

    }
   
}
const handleDelete = ()=>{

setDialogue(true)

}

const handleDeleteDialogue =(id)=>{
    const filterPosts = posts.filter(post=>post.id !== id)
    setTimeout (()=>{
        setPosts(filterPosts)
        navigate('/')

    },1000)
      // Save posts to localStorage
      localStorage.setItem('posts', JSON.stringify(filterPosts));
   
}
const handleCancelDialogue =()=>{
    setTimeout (()=>{
        setDialogue(false)
    },300)
    
}



const handleEditForm = (id)=>{
    
    const datetime = format(new Date(),"MMMM dd , yyyy pp ")
    const updatedPost={ id, title:editPostTitle, datetime, body:editPostBody }
    const editedPost = posts.map(post=>post.id == id ?{...updatedPost}:post)
    setPosts(editedPost)
    navigate('/')
     // Save posts to localStorage
     localStorage.setItem('posts', JSON.stringify(editedPost));
}















    return (
        <PostContext.Provider value={
            {
                posts,setPosts,title,setTitle,postBody,setPostBody,msg,handleFormSubmit,alertStatus,handleDelete,dialogue,
                handleDeleteDialogue,handleCancelDialogue,
                editPostBody,setEditPostTitle,editPostTitle,setEditPostBody,handleEditForm,search,setSearch,searchResults

            
            }
            
            
            }>
{children}
        </PostContext.Provider>
    )
}
export default PostContext