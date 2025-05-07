import axios from 'axios';

async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({message: 'Token não fornecido ou mal formatado'});
  }

  try {
    // Repassa o token para a aplicação de segurança
    // Aqui, pode usar o Axios ou o Fetch, ambos servem para consumir
    const response = await axios.get(
      'http://sua-aplicacao-de-seguranca/v1/user/profile',
      {
        headers: {
          Authorization: authHeader,
        },
      },
    );

    // Se tudo estiver correto, ele passa para a próxima etapa da rota
    if (response.status === 200) {
      req.user = response.data; // Opcional: armazena os dados do usuário
      return next();
    }

    // Se não for 200, bloqueia o acesso
    return res.status(403).json({message: 'Token inválido ou não autorizado'});
  } catch (error) {
    return res
      .status(403)
      .json({message: 'Erro ao validar token', error: error.message});
  }
}

export default authenticateToken;
