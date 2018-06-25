import {
  FormsService
} from './../../forms.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {
  TextQ,
  Form
} from '../../models';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  submitting: boolean;

  form: FormGroup;
  name: string;
  id: number;
  questions: TextQ[];
  submit_count: number;
  submissions: any[];

  constructor(private route: ActivatedRoute, private router: Router, private service: FormsService, private fb: FormBuilder) {
    this.submitting = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getForm(params['id']).subscribe(res => {
        this.id = params['id'];
        this.name = res.name;
        this.questions = res.questions;
        const formGroup = {};
        formGroup['name'] = new FormControl('', Validators.required);
        this.questions.forEach((element, index) => {
          formGroup[element.label] = new FormControl('', this.checkRequired(element.required, element.type));
        });
        formGroup['captcha'] = new FormControl('', Validators.required);
        this.form = new FormGroup(formGroup);
      });
    });
  }

  private checkRequired(isRequired, type) {
    const formValidators = [];
    if (isRequired) {
      formValidators.push(Validators.required);
    }
    if (type === 'email') {
      formValidators.push(Validators.email);
    }
    return formValidators;
  }

  get submitting1() {
    return this.submitting;
  }

  get formName() {
    return this.name;
  }

  reset() {
    this.form.reset();
  }


  onSubmit() {
    if (this.form.valid) {
      this.submitting = true;
      const data = this.form.getRawValue();
    //  console.log(JSON.parse(JSON.stringify(data)));
      this.service.submitForm(this.id, data).subscribe(
        success => {  this.submitting = false;
                      this.router.navigate(['index']);
                      this.form.reset(); }
        );
    //  console.log('Form Submitted!');
    }
  }

}
