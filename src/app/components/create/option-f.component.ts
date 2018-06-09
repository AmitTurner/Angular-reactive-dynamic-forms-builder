import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
    selector: 'option-f',
    templateUrl: './option-f.component.html'
})

export class OptionFComponent {
    @Input('group') optionGroup: FormGroup;
}