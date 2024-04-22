import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorhandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError((error:HttpErrorResponse)=>{
    

    console.log("Error Code: "+error+" Error Message: "+error.message);
    if(error.status === 401){
      console.log("Error Code: "+error.status+" Error Message: "+error.message);
      
    }
    return throwError(error);
  }))
};

// import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
// import { Observable, catchError, throwError } from 'rxjs';
// import { Router } from '@angular/router';
// let router:Router;
// export function setRouter(r:Router){
//   router = r;
// }

// export const errorhandlerInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req).pipe(catchError((error:HttpErrorResponse)=>{
    

//     console.log("Error Code: "+error+" Error Message: "+error.message);
//     if(error.status === 401){
//       console.log("Error Code: "+error.status+" Error Message: "+error.message);
//       router.navigate(['/login']);
//     }
//     return throwError(error);
//   }))
// };
