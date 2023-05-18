import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
export declare class LogInterceptador implements NestInterceptor {
    intercept(contexto: ExecutionContext, proximo: CallHandler<any>): Observable<any> | Promise<Observable<any>>;
}
