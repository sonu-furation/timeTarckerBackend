import * as HttpStatus from "./http-status";

import { executionAsyncId } from 'async_hooks';
import * as ErrorMessage from "./message-error";

export class ErrorClass extends Error {
  status: number;
  message: string;
  name: string;

  constructor(status: number, message: string, name: string) {
    super();
    this.status = status;
    this.message = message;
    this.name = name;
  }
}

class ApiError extends ErrorClass {
  constructor(status: number, message: string, name: string = "ApiError") {
    super(status, message, name);
  }

  static customError(status: number, specificMessage: string): ApiError {
    return new ApiError(status, specificMessage);
  }

  static getOk(): ApiError {
    return new ApiError(HttpStatus.OK, ErrorMessage.FETCH_SUCCESS, "OK");
  }

  static created(): ApiError {
    return new ApiError(
      HttpStatus.CREATED,
      ErrorMessage.CREATE_SUCCESS,
      "Created"
    );
  }

  static delete(): ApiError {
    return new ApiError(HttpStatus.OK, ErrorMessage.DELETED_SUCCESS, "Deleted");
  }

  static noContent(): ApiError {
    return new ApiError(
      HttpStatus.NO_CONTENT,
      ErrorMessage.DELETED_SUCCESS,
      "NoContent"
    );
  }

  static notFound(): ApiError {
    return new ApiError(
      HttpStatus.NOT_FOUND,
      ErrorMessage.NOT_FOUND,
      "notfound"
    );
  }

  static adminNotFound(): ApiError {
    return new ApiError(
      HttpStatus.NOT_FOUND,
      ErrorMessage.ADMIN_NOT_FOUND,
      "adminnotfound"
    );
  }
  static employeeNotFound(): ApiError {
    return new ApiError(
      HttpStatus.NOT_FOUND,
      ErrorMessage.EMPLOYEE_NOT_FOUND,
      "employeenotfound"
    );
  }

  static badRequest(): ApiError {
    return new ApiError(
      HttpStatus.BAD_REQUEST,
      ErrorMessage.BAD_REQUEST,
      "badRequest"
    );
  }

  static unAuthorized(): ApiError {
    return new ApiError(
      HttpStatus.UNAUTHORIZED,
      ErrorMessage.UNAUTHORIZED,
      "unAuthorized"
    );
  }

  static noService(): ApiError {
    return new ApiError(
      HttpStatus.SERVICE_UNAVAILABLE,
      ErrorMessage.SERVICE_UNAVAILABLE,
      "noService"
    );
  }

  static emailExist(): ApiError {
    return new ApiError(HttpStatus.CONFLICT, ErrorMessage.CONFLICT, "conflict");
  }
  

  static internalError(): ApiError {
    return new ApiError(
      HttpStatus.INTERNAL_SERVER_ERROR,
      ErrorMessage.INTERNAL_SERVER_ERROR,
      "internalError"
    );
  }

  static mongoError(): ApiError {
    return new ApiError(
      HttpStatus.INTERNAL_SERVER_ERROR,
      ErrorMessage.UNDEFINE_MESSAGE,
      "undifined"
    );
  }

  static forbidden(): ApiError {
    return new ApiError(
      HttpStatus.FORBIDDEN,
      ErrorMessage.FORBIDDEN,
      "forbidden"
    );
  }
}

export default ApiError;
