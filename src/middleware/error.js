import { EErrors } from "../services/errors/enum.js";

export const errorHandler = (error, req, res, next) => {

    switch(error.code) {
        case EErrors.DB_ERROR:
            req.logger.fatal(`${error.name}: ${error.source}`);
            break;

        case EErrors.INVALID_TYPES_ERROR:
            req.logger.error(`${error.name}: ${error.source}`);
            break;

        case EErrors.ROUTE_ERROR:
            req.logger.error(`${error.name}: ${error.source}`);
            break;

        case EErrors.DUPLICATE_USER:
            req.logger.error(`${error.name}: ${error.source}`);
            break;

        case EErrors.INVALID_CODE:
            req.logger.error(`${error.name}: ${error.source}`);
            break;

        case EErrors.MISSING_FIELDS:
            req.logger.error(`${error.name}: ${error.source}`);
            break;

        case EErrors.NOT_FOUND:
            req.logger.error(`${error.name}: ${error.source}`);
            break;
            
        default:
            req.logger.error("Error desconocido");
            break;
    }
}