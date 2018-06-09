import { OptionFComponent } from './option-f.component';
import { QuestionComponent } from './question.component';

import { TextQ } from './../../models';
import { FormsService } from './../../forms.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validator, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent{
  form: FormGroup;
  val:number;
  empty: boolean;
  submitting: boolean;

  constructor(private formservice: FormsService, private fb: FormBuilder,private changeDetector: ChangeDetectorRef,private router: Router) {
    this.createForm();
    this.empty=true;
    this.submitting=false;
   }
   
   ngAfterViewChecked(){
    this.changeDetector.detectChanges();
  }

  createForm() {
    this.form = this.fb.group({
      name: new FormControl('',Validators.required),
      questions: this.fb.array([]),
    });
  }

  initQuestion(){
    return this.fb.group({
      label: new FormControl('',Validators.required),
      type: new FormControl('',Validators.required),
      options: this.fb.array([]),
      required: false
    });
  }

  addTextQuestion() {
    this.empty=false;
    const questionsArray = <FormArray>this.form.controls['questions'];
    const newQuestion = this.initQuestion();
    questionsArray.push(newQuestion);
  }


  deleteTextQuestion(index) {
    const questionsArray = <FormArray>this.form.controls['questions'];
    questionsArray.removeAt(index);
  }


  reset() {
    this.form = this.fb.group({
      name: '',
      questions: this.fb.array([]),
      submissions: 0,
    });
    this.empty=true;
  }

  get questions(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  get name(): FormArray {
    return this.form.get('name') as FormArray;
  }


  onSubmit() {
    if (this.form.valid && !this.empty) {
      this.submitting=true;
    const data = this.form.getRawValue();
    console.log( JSON.parse(JSON.stringify(data)));
    this.formservice.addForm(data);
    
      console.log( JSON.parse(JSON.stringify(data)));
      this.form.reset();
      setTimeout(()=>{ this.submitting=false; this.router.navigate(['index']); }, 2000)
    }
    else{
      this.validateAllFormFields(this.form);
    
    }

  } 

  validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}

get is_empty(): boolean { return this.empty;}

get submitting1() { return this.submitting; }

}
