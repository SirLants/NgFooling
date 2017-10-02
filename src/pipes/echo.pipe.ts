// Credit to: https://medium.com/@lacolaco/setting-up-angular-2-testing-environment-with-karma-and-webpack-e9b833befd99
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'echo'
})
export class EchoPipe implements PipeTransform {
    transform(value: any): any {
        return value;
    }
}