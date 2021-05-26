import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})

export class NameEditorComponent implements OnInit {

  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }

  constructor() { }

  nameEditor!: FormGroup;

  ngOnInit(): void {
    this.nameEditor = new FormGroup({
      busca: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      data: new FormControl("")
    });
  }

  get busca() { return this.nameEditor.get('busca')!; }
  get data() { return this.nameEditor.get('data')!; }

}
