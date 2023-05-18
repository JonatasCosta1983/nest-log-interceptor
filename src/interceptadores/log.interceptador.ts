import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LogInterceptador  implements NestInterceptor{
    intercept(contexto: ExecutionContext, proximo: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
       
        console.log("Antes...");
        const data = Date.now()
        const requisicao = contexto.switchToHttp().getRequest()
        
        
        return proximo.handle().pipe(tap(()=> {
               
               console.log(`Url: ${requisicao.url}`);
               console.log(`Metodo: ${requisicao.method}`);
               console.log(`A execução durou ${Date.now() - data} milisegundos`);
               
          }
     ))
   }
}