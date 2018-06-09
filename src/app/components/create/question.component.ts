import { OptionFComponent } from './option-f.component';
import {CreateComponent} from './create.component';
import { TextQ } from './../../models';
import { FormsService } from './../../forms.service';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validator, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'question',
    templateUrl: 'question.component.html',
    styleUrls: ['./create.component.css']
})
export class QuestionComponent {
    @Input('group') questionGroup: FormGroup;
    qType = ['text', 'color', 'date', 'email', 'tel', 'number','options'];
    first_option_added: boolean;
    
    constructor(private fb: FormBuilder) {
        this.first_option_added= true;
     }

    // ngAfterViewChecked(){
    //     this.changeDetector.detectChanges();
    //   }

    addOption() {
        const optionsArray = <FormArray>this.questionGroup.controls['options'];
        const newoption = this.initOption();
        optionsArray.push(newoption);
    }
    addfirstOption() {
        if (this.first_option_added){
        const optionsArray = <FormArray>this.questionGroup.controls['options'];
        const newoption = this.initOption();
        optionsArray.push(newoption);
        this.first_option_added=false;
    }
}

    

    removeOption(index: number) {
        const optionsArray = <FormArray>this.questionGroup.controls['options'];
        optionsArray.removeAt(index);
    }

    initOption() {
        return this.fb.group({
            option: new FormControl('',Validators.required)
        });
    }

    get options(): FormArray {
        return this.questionGroup.get('options') as FormArray;
      }
}