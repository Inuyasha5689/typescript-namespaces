/**
 * Created by dasco on 3/11/2017.
 */
namespace MyMath {
    export namespace  Circle{
        const PI = 3.14;

        export function calculateCircumference(diameter: number): number {
            return diameter * PI;
        }
    }

}