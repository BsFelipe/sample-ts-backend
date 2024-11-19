
interface Placeholders {
  [key: string]: string;
}

type MessageKey =
  | 'invalidBodyRequest';

class CustomError extends Error {
  static messages: { [key in MessageKey]: string } = {
    invalidBodyRequest: 'inval_body_request',

  };

  statusCode: number;

  constructor(messageKey: MessageKey, statusCode: number, placeholders: Placeholders = {}) {
    let message = CustomError.messages[messageKey] || 'an_generic_error_occurred';

    for (const [key, value] of Object.entries(placeholders)) {
      message = message.replace(`{${key}}`, value);
    }

    super(message);
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, CustomError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;
