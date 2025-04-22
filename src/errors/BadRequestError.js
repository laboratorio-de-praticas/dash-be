import ApplicationError from './ApplicationError.js';

class BadRequestError extends ApplicationError {
  constructor(message = 'Requisição mal formada') {
    super(message, 400);
  }
}

export default BadRequestError;
