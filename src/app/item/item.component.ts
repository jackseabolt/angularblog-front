import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
    selector: 'item',
    templateUrl: './item.component.html', 
    styleUrls: ['./item.component.css']
})

export class ItemComponent {
    @Input() post: Object; 
    @Output() delete = new EventEmitter(); 
    @Output() check = new EventEmitter(); 

    onDelete() {
        this.delete.emit(); 
    }

    onUpdate() {
        this.check.emit(); 
    }

}