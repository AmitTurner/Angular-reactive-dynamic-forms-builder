export class TextQ {

  label: string;
  type: string;
  options: string[];
  required: boolean;

  constructor(array){
    this.label = '';
    this.type = '';
    this.options = array;
    this.required = false;
  }
  }
  

  export interface Form { 
    id: string;
    name: string;
    subs_count: number;
    questions: any[];
    submissions: any[];
  }