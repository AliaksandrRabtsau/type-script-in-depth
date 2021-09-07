namespace Utility {
    export namespace Fees {
        export function calculateLateFee(dayslLate: number): number {
            return dayslLate * 0.25;
        }
    }

    export function maxBooksAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }

    function privateFunc(): void {
        console.log('this is private function');
    }
}