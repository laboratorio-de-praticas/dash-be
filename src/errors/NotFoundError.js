import ApplicationError from './ApplicationError.js';

class NotFoundError extends ApplicationError {
  constructor(message = 'Recurso não encontrado') {
    super(message, 404);
  }
}

export default NotFoundError;
