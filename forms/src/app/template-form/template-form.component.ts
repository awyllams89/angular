import { PessoaService } from './../service/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { CepService } from '../service/cep.service';
import { Form, FormGroup } from '@angular/forms';

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

  constructor(private cepService: CepService, private pessoaService: PessoaService) { }

  onSubmit(form : any){
    if(form.valid){
      const formData = form.value;
      this.pessoaService.salvarPessoa(formData)
    } else{
      console.log("form inválido")
    }

  }
  ngOnInit(): void {
  }

  aplicaCssDeErro(campo:any){
    return {
      'is-invalid': !campo.valid && campo.touched
    }
  }

  consultaCEP($event: Event, form: any){
    let cep = ($event.target as HTMLInputElement).value;
    cep = cep.replace(/\D/g, '');

    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)) {

          this.resetForm(form)

          this.cepService.consultarCep(cep).subscribe(
            (data) => {
              console.log(data)
              this.populaDadosForm(data,form)
            },
            (err) => {
              console.log("erro: " + err)
            }
          );

        }
    }
  }

  populaDadosForm(dados: any, formulario: any){
    console.log(dados)
    formulario.form.patchValue({
      endereco:{
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetForm(formulario: any){
    formulario.form.patchValue({
      endereco:{
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null}
    });
  }

}
