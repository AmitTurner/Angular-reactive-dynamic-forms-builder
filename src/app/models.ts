export class TextQ {
    label = '';
    type = '';
    required = false;
  }
  

  export interface Form { 
    id: string;
    name: string;
    subs_count: number;
    questions: any[];
    submissions: any[];
  }