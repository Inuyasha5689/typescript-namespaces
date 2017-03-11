/**
 * Created by dasco on 3/9/2017.
 */
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import CircleMath = MyMath.Circle;

const PI = 2.99;

console.log(MyMath.calculateRectangle(10,20));
console.log(CircleMath.calculateCircumference(3));
console.log(PI);

// tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts (without namespace imports)
// tsc app.ts --outFile app.js (with namespace imports)