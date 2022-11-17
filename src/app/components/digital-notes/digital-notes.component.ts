import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface notes{
   notes:string
   updateAt:Date;
}
@Component({
  selector: 'app-digital-notes',
  templateUrl: './digital-notes.component.html',
  styleUrls: ['./digital-notes.component.css']
})
  
export class DigitalNotesComponent implements OnInit {
  form!: FormGroup;
  notesList:notes[]=[];
  p: number = 1;
  perpage:number=5;
  keyword:string='';
  duplicateArray:notes[]=[];
  constructor( 
    private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      notes: ['', [Validators.required]],
     
    });
  }

  addNotes()
  {
    this.notesList.push({notes:this.form.value.notes,updateAt:new Date()});
    this.duplicateArray=this.notesList;
    this.form.reset();
  }

  sortData() {
    return this.notesList.sort((a, b) => {
      return <any>new Date(b.updateAt) - <any>new Date(a.updateAt);
    });
  }
  details(index:number)
  {
    this.notesList[index]['updateAt']=new Date();
  }
  search()
  {
    this.notesList=this.notesList.filter((x) => x.notes.includes(this.keyword))
  }
  reset()
  {
    this.notesList=this.duplicateArray;
    this.keyword='';
   
  }
}
