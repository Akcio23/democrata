import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import getPosts from "../api/get";
import deletePost from "../api/delete";




import '../style/Home.css'


const Home = () => {
    const [posts,setposts] = useState([]) // posts inicia vazio[], setpost altera o estado apartir da resposta da requisição
 

    //requisição GET
    const fechtpost = async ()=>{
      try{
        const postsData = await getPosts()
        setposts(postsData)
  
      }catch(error){
        console.log(error);
      }
    }
     //Requisição REMOVE
     const removepost = async (id)=>{
      try{
        await deletePost(id)
        
      }catch(error){
        console.log(error);
      }
    }

    useEffect(()=>{
      fechtpost() // função é chamada ao carregamento da pagina 
      document.title = 'BLOG'
    }, []) // array vazio seta que a função será chamada apenas uma vez na pagina 

  return (
     <div className="home">
      
      <h1>Últimos posts</h1>

      {posts.length === 0 ? <p>Vazio...</p> : (
        posts.map(post => (
          <div className='post' key={post.id}>
            <h2>{post.title}</h2>
           
            <p>{post.body}</p>

            <div className="usabylit">
            <Link to={`/update/${post.id}`}  className="btn btn-uptade">Alterar post</Link>
            <Link to={`/delete/${post.id}`} className="btn btn-delete">Deletar post</Link>
           
            </div>
            
          </div>
        ))

)}
    </div>
    

  )
}

export default Home

