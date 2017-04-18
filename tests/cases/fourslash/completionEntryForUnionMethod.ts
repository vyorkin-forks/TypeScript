///<reference path="fourslash.ts" />

////var y: Array<string>|Array<number>;
////y.map/**/(

goTo.marker();
verify.quickInfoIs(
    "(property) map: {\n    <U>(this: [string, string, string, string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U): [U, U, U, U, U];\n    <U>(this: [string, string, string, string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U, thisArg: undefined): [U, U, U, U, U];\n    <Z, U>(this: [string, string, string, string, string], callbackfn: (this: Z, value: string, index: number, array: string[]) => U, thisArg: Z): [U, U, U, U, U];\n    <U>(this: [string, string, string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U): [U, U, U, U];\n    <U>(this: [string, string, string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U, thisArg: undefined): [U, U, U, U];\n    <Z, U>(this: [string, string, string, string], callbackfn: (this: Z, value: string, index: number, array: string[]) => U, thisArg: Z): [U, U, U, U];\n    <U>(this: [string, string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U): [U, U, U];\n    <U>(this: [string, string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U, thisArg: undefined): [U, U, U];\n    <Z, U>(this: [string, string, string], callbackfn: (this: Z, value: string, index: number, array: string[]) => U, thisArg: Z): [U, U, U];\n    <U>(this: [string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U): [U, U];\n    <U>(this: [string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U, thisArg: undefined): [U, U];\n    <Z, U>(this: [string, string], callbackfn: (this: Z, value: string, index: number, array: string[]) => U, thisArg: Z): [U, U];\n    <U>(callbackfn: (this: void, value: string, index: number, array: string[]) => U): U[];\n    <U>(callbackfn: (this: void, value: string, index: number, array: string[]) => U, thisArg: undefined): U[];\n    <Z, U>(callbackfn: (this: Z, value: string, index: number, array: string[]) => U, thisArg: Z): U[];\n} | {\n    <U>(this: [number, number, number, number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U): [U, U, U, U, U];\n    <U>(this: [number, number, number, number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U, thisArg: undefined): [U, U, U, U, U];\n    <Z, U>(this: [number, number, number, number, number], callbackfn: (this: Z, value: number, index: number, array: number[]) => U, thisArg: Z): [U, U, U, U, U];\n    <U>(this: [number, number, number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U): [U, U, U, U];\n    <U>(this: [number, number, number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U, thisArg: undefined): [U, U, U, U];\n    <Z, U>(this: [number, number, number, number], callbackfn: (this: Z, value: number, index: number, array: number[]) => U, thisArg: Z): [U, U, U, U];\n    <U>(this: [number, number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U): [U, U, U];\n    <U>(this: [number, number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U, thisArg: undefined): [U, U, U];\n    <Z, U>(this: [number, number, number], callbackfn: (this: Z, value: number, index: number, array: number[]) => U, thisArg: Z): [U, U, U];\n    <U>(this: [number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U): [U, U];\n    <U>(this: [number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U, thisArg: undefined): [U, U];\n    <Z, U>(this: [number, number], callbackfn: (this: Z, value: number, index: number, array: number[]) => U, thisArg: Z): [U, U];\n    <U>(callbackfn: (this: void, value: number, index: number, array: number[]) => U): U[];\n    <U>(callbackfn: (this: void, value: number, index: number, array: number[]) => U, thisArg: undefined): U[];\n    <Z, U>(callbackfn: (this: Z, value: number, index: number, array: number[]) => U, thisArg: Z): U[];\n}",
    "Calls a defined callback function on each element of an array, and returns an array that contains the results.\nCalls a defined callback function on each element of an array, and returns an array that contains the results.\nCalls a defined callback function on each element of an array, and returns an array that contains the results.\nCalls a defined callback function on each element of an array, and returns an array that contains the results.\nCalls a defined callback function on each element of an array, and returns an array that contains the results.");

verify.completionListContains('map', "(property) map: {\n    <U>(this: [string, string, string, string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U): [U, U, U, U, U];\n    <U>(this: [string, string, string, string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U, thisArg: undefined): [U, U, U, U, U];\n    <Z, U>(this: [string, string, string, string, string], callbackfn: (this: Z, value: string, index: number, array: string[]) => U, thisArg: Z): [U, U, U, U, U];\n    <U>(this: [string, string, string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U): [U, U, U, U];\n    <U>(this: [string, string, string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U, thisArg: undefined): [U, U, U, U];\n    <Z, U>(this: [string, string, string, string], callbackfn: (this: Z, value: string, index: number, array: string[]) => U, thisArg: Z): [U, U, U, U];\n    <U>(this: [string, string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U): [U, U, U];\n    <U>(this: [string, string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U, thisArg: undefined): [U, U, U];\n    <Z, U>(this: [string, string, string], callbackfn: (this: Z, value: string, index: number, array: string[]) => U, thisArg: Z): [U, U, U];\n    <U>(this: [string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U): [U, U];\n    <U>(this: [string, string], callbackfn: (this: void, value: string, index: number, array: string[]) => U, thisArg: undefined): [U, U];\n    <Z, U>(this: [string, string], callbackfn: (this: Z, value: string, index: number, array: string[]) => U, thisArg: Z): [U, U];\n    <U>(callbackfn: (this: void, value: string, index: number, array: string[]) => U): U[];\n    <U>(callbackfn: (this: void, value: string, index: number, array: string[]) => U, thisArg: undefined): U[];\n    <Z, U>(callbackfn: (this: Z, value: string, index: number, array: string[]) => U, thisArg: Z): U[];\n} | {\n    <U>(this: [number, number, number, number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U): [U, U, U, U, U];\n    <U>(this: [number, number, number, number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U, thisArg: undefined): [U, U, U, U, U];\n    <Z, U>(this: [number, number, number, number, number], callbackfn: (this: Z, value: number, index: number, array: number[]) => U, thisArg: Z): [U, U, U, U, U];\n    <U>(this: [number, number, number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U): [U, U, U, U];\n    <U>(this: [number, number, number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U, thisArg: undefined): [U, U, U, U];\n    <Z, U>(this: [number, number, number, number], callbackfn: (this: Z, value: number, index: number, array: number[]) => U, thisArg: Z): [U, U, U, U];\n    <U>(this: [number, number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U): [U, U, U];\n    <U>(this: [number, number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U, thisArg: undefined): [U, U, U];\n    <Z, U>(this: [number, number, number], callbackfn: (this: Z, value: number, index: number, array: number[]) => U, thisArg: Z): [U, U, U];\n    <U>(this: [number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U): [U, U];\n    <U>(this: [number, number], callbackfn: (this: void, value: number, index: number, array: number[]) => U, thisArg: undefined): [U, U];\n    <Z, U>(this: [number, number], callbackfn: (this: Z, value: number, index: number, array: number[]) => U, thisArg: Z): [U, U];\n    <U>(callbackfn: (this: void, value: number, index: number, array: number[]) => U): U[];\n    <U>(callbackfn: (this: void, value: number, index: number, array: number[]) => U, thisArg: undefined): U[];\n    <Z, U>(callbackfn: (this: Z, value: number, index: number, array: number[]) => U, thisArg: Z): U[];\n}");
