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
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['../forms-list/forms-list.component.css']
})
export class SubmissionsComponent implements OnInit {

  name: string;
  id: number;
  questions: TextQ[];
  submit_count: number;
  submissions: any[] = [];
  questions_keys: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private service: FormsService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getForm(params['id']).subscribe(res => {
        this.id = params['id'];
       // console.log(res);
        this.questions = res.questions;
        this.submissions = res.submissions;
        this.getkeys();
      });
    });
  }

  getkeys() {
    this.questions.forEach(element => {
      if (element.label !== 'name') {
        this.questions_keys.push(element.label);
      }
    });
  }

}
