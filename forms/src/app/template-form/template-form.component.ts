import { Component, OnInit } from '@angular/core';
import { CepService } from '../service/cep.service';

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

  constructor(private cepService: CepService) { }

  onSubmit(form : any){
    console.log(form);

    console.log(this.usuario)
  }
  ngOnInit(): void {
  }

  aplicaCssDeErro(campo:any){
    return {
      'is-invalid': !campo.valid && campo.touched
    }
  }

  consultaCEP($event: Event){
    let cep = ($event.target as HTMLInputElement).value;
    cep = cep.replace(/\D/g, '');

    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)) {
          this.cepService.consultarCep(cep).subscribe(
            (data) => {
              console.log(data)
              if (data.erro) {

              } else {
              }
            },
            (err) => {
              console.log("erro: " + err)
            }
          );

        }
    }
  }

}
