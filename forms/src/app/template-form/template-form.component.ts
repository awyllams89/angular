import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

usuario : any = {
  nome:'allan',
  email:'alan@email.com'
}

  constructor() { }

  onSubmit(form : any){
    console.log(form);

    console.log(this.usuario)
  }
  ngOnInit(): void {
  }

}
