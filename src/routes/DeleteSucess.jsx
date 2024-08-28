import '../style/DeleteSucess.css'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import deletePost from "../api/delete";
const DeleteSucess =()=>{
    const { id } = useParams(); 
    console.log(id)
    if(!id){
        return (
            <div className="post-delete">
        <h2>Não á post a ser deletado!</h2>
        <Link to={`/`} className='btn'>Voltar</Link>
    </div>
        )
    }
       //Requisição REMOVE
       const removepost = async (id)=>{
        try{
          await deletePost(id)
          
        }catch(error){
          console.log(error);
        }
      }


    return( 
    <div className="post-delete">
        <h2>Confirme a exclução do post</h2>
        
        <div className='botoes'>
        <Link to={'/'} onClick={() => removepost(id)} className="btn btn-delete">Deletar </Link>
        <Link to={`/`} className='btn'>Voltar</Link>
        </div>
            
        
        
    </div>
    )
   
}


export default DeleteSucess;