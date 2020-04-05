import { ArrayResponse, GeneseModelEnvironment } from 'genese-angular';
import { BookSchema } from './book.model';


export class ArrayOfArraysOfBooks implements ArrayResponse {

    public gnArrayResponse?: BookSchema[][] = [[new BookSchema()]];
    public genese?: GeneseModelEnvironment = {
        path: '/array-response/array-of-arrays-of-books'
    };
}
