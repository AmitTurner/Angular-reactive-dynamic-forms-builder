import { FormsService } from './../../forms.service';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validator, FormControl, FormArray, Validators } from '@angular/forms';
import { TextQ } from '../../models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  qType = ['text', 'color', 'date', 'email', 'tel', 'number'];

  constructor(private formservice: FormsService, private fb: FormBuilder) {
    this.createForm();
   }
   
  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      name: '',
      questions: this.fb.array([]),
    });
  }

  addTextQuestion() {
    this.questions.push(this.fb.group(new TextQ()));
  }

  deleteTextQuestion(index) {
    this.questions.removeAt(index);
  }

  reset() {
    this.form = this.fb.group({
      id: 0,
      name: '',
      questions: this.fb.array([]),
      submissions: 0,
    });
  }

  get questions(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  get name(): FormArray {
    return this.form.get('name') as FormArray;
  }


  onSubmit() {
    if (this.form.valid) {
    const data = this.form.getRawValue();
    console.log( JSON.parse(JSON.stringify(data)));
    this.formservice.addForm(data);
      console.log( JSON.parse(JSON.stringify(data)));
      this.form.reset();
    };
    //const formObj = JSON.parse(JSON.stringify(data)); // {name: '', description: ''}
    //this.form.reset();
        //console.log(formObj);
    }

  }





