import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({
    name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {
    transform(value: any, args?: any) {
        if(!value) {
            return null;
        }
        let wordArray = value.split(" "); 
        let capitalizedArray = wordArray.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);  
        })
        return capitalizedArray.join(" "); 
    }
}