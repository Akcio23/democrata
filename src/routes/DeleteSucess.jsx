import '../style/DeleteSucess.css'
import { Link } from "react-router-dom"
const DeleteSucess =()=>{
    return( 
    <div className="post-delete">
        <h2>Post deletado com Sucesso!</h2>
        <Link to={`/`} className='btn'>Retornar ao menu</Link>
    </div>
    )
   
}


export default DeleteSucess;