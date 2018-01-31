import { Component, Output, EventEmitter } from '@angular/core'; 

@Component({ 
    selector: 'item-form', 
    templateUrl: './item-form.component.html', 
    styleUrls: ['./item-form.component.css']
})

export class ItemFormComponent {

    @Output() submit = new EventEmitter(); 
    onSubmit(userInput) {
        event.preventDefault(); 
        this.submit.emit({ value: userInput.value })
        console.log(userInput.value)
    }
}
