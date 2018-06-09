import {
  Component,
  Input
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-option',
  templateUrl: './option-f.component.html'
})

export class OptionFComponent {
  @Input('group') optionGroup: FormGroup;
}
