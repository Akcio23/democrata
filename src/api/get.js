import blogFetch from '../axios/config';

// Função para buscar posts
const getPosts = async () => {
  try {
    const response = await blogFetch.get('/posts'); // Faz a requisição para a API
    const data = response.data; // Recebe os dados da resposta da requisição

    // Mapeia os dados para extrair os detalhes do post de cada objeto
    const formattedPosts = data.map(item => ({
      id: item.id, // Mantém o ID do objeto principal
      title: item.body.title, // Extrai o título do objeto 'posts'
      body: item.body.body, 
      userId: item.body.userId 
    }));

    return formattedPosts; // Retorna os posts formatados

  } catch (error) {
    console.log("Erro ao buscar posts:", error);
  }
};


export default getPosts;