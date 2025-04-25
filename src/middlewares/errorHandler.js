const errorHandler = (err, req, res, _next) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Erro interno no servidor';

  // Só mostra a mensagem no terminal
  console.error(`[${statusCode}] ${err} ${err.stack}`);

  // Retorno limpo para o cliente
  res
    .status(statusCode)
    .json({errorName: err.name, error: message, status: statusCode});
};

export default errorHandler;
