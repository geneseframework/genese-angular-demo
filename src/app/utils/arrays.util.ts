
/**
 * Checks if all the elements of the array2 are in the array2
 * @param bigArray
 * @param smallArray
 */
export function includes(bigArray: any[], smallArray: any[]): boolean {
    if (areNoyArrays(bigArray, smallArray)) {
        return false;
    }
    return !smallArray.some(element => !bigArray.includes(element));
}


export function isArray(data: any): data is Array<any> {
    return Array.isArray(data);
}


export function areNoyArrays(first: any, last: any): boolean {
    return !isArray(first) || !isArray(last);
}

export function flat(array: any[]): any[] {
    if(!array || array.length === 0) {
        return [];
    }
    else if(Array.isArray(array[0])) {
        return flat(array[0]).concat(flat(array.slice(1)));
    }
    else {
        return [array[0]].concat(flat(array.slice(1)));
    }
}
