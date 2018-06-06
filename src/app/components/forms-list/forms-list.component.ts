import { FormsService } from './../../forms.service';
import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import {ChangeDetectorRef} from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css'],
})

export class FormsListComponent  implements OnInit{

  forms: any;
  constructor(private service: FormsService,
    private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.getForms();
  }

  getForms() {
    this.service.getForms().subscribe(res => {
      this.forms = res;
      this.cd.markForCheck();
      console.log(res);
    });
  }

  deleteForm(id,i){
    this.service.deleteForm(id).subscribe(res => {
      console.log("Deleted");
      this.cd.markForCheck();
      this.forms.splice(i,1);
      });
    }


}


