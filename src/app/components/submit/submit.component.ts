import { FormsService } from './../../forms.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  FormControl,  Validators } from '@angular/forms';
import { TextQ, Form } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  //formitem: Form;
  form: FormGroup;
  
  name: string;
  id:number;
  questions: TextQ[];
  submit_count:number;
  submissions: any[]

  constructor(private route: ActivatedRoute, private router: Router, private service: FormsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.service.getForm(params['id']).subscribe(res => {
        console.log(params['id']);
        this.id=params['id'];
        console.log(res);
        this.name=res.name;
        this.questions=res.questions;
        const formGroup = {};
        formGroup["name"] = new FormControl('',Validators.required);
        this.questions.forEach((element,index )=> {
        formGroup[element.label] = new FormControl('', this.checkRequired(element.required,element.type));
        });
        this.form = new FormGroup(formGroup);
      });
    });
  }

  private checkRequired(isRequired,type) {
    const formValidators = [];

    if (isRequired) {
          formValidators.push(Validators.required);
    }
    if (type=="email"){
      formValidators.push(Validators.email);
    }
    return formValidators; 
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }

    return formValidators; 
  }

  get formName() { return this.name; } 
  reset(){
    this.form.reset();
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      console.log( JSON.parse(JSON.stringify(data)));
      this.service.submitForm(this.id,data);
      console.log("Form Submitted!");
      this.form.reset();
    }
  }

}




