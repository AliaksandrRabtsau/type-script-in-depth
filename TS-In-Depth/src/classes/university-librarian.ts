import * as Interfaces from './../interfaces';
import { logger, sealed, writable, logParameter, logMethod, format } from './decorators';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;
    age: number;

    // @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assist ${custName}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }
    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };