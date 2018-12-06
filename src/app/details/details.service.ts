import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { IDetails } from "./details";

@Injectable({
    providedIn: 'root' 
})
export class DetailsService {
    DetailsUrl: string = "assets/details.json";

    constructor(private http : HttpClient) {
       
    }

    getDetails(): Observable<IDetails[]> {
        return this.http.get<IDetails[]>(this.DetailsUrl).pipe(
            tap(data => console.log('All products' + JSON.stringify(data)))
        );
    }

    // private handleError(err: HttpErrorResponse) {

    //     let errorMessage = '';
    //     if (err.error instanceof ErrorEvent) {
    //         errorMessage = `An error occurred: ${err.error.message}`;
    //     } else {
    //         errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    //     }
    //     console.error(errorMessage);
    //     return throwError(errorMessage);

    // }
}