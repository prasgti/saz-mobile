import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoadingProvider, MessageProvider, AuthProvider } from 'src/app/providers';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Validation } from 'src/app/utils';

@Component({
  selector: 'app-login-registrato',
  templateUrl: './login-registrato.page.html',
  styleUrls: ['./login-registrato.page.scss'],
})
export class LoginRegistratoPage implements OnInit {

  /**
   * Esconder valor da senha
   */
  hideValue = true;

  /**
   * Estado selecionado
   */
  stateSelectedText = 'Selecione';

  /**
   * Form object
   */
  loginForm: FormGroup;

  /**
   * Controle de sugmit do form
   */
  submitted = false;

  constructor(
    public loadingProvider: LoadingProvider,
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    public messageProvider: MessageProvider,
    public authProvider: AuthProvider,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({
      cpf: new FormControl('', Validators.compose([Validators.required, Validation.cpf,
        Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/), Validators.maxLength(14)])),
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  validateForm() {
    this.loginForm.controls['cpf'].markAsTouched();

    if (this.loginForm.valid) {
      return true;
    }

    let msg = '';

    if (this.loginForm.controls['cpf'].hasError('length')) {
      msg = 'CPF deve ser composto de 11 dígitos.';
    }
    if (this.loginForm.controls['cpf'].hasError('invalid')) {
      msg = 'CPF inválido.';
    }
    if (!this.loginForm.controls['password'].valid) {
      msg = 'Informe a senha.';
    }
    if (this.loginForm.controls['cpf'].value === '') {
      msg = 'CPF é obrigatório.';
    }
    if (this.loginForm.controls['password'].value === '') {
      msg = 'Senha é obrigatória.';
    }
    if (this.loginForm.controls['cpf'].value === '' && this.loginForm.controls['password'].value === '') {
      msg = 'Informe CPF e senha para acessar.';
    }

    this.messageProvider.present( msg );

    return false;
  }

  async login() {
    this.submitted = true;

    if (this.validateForm()) {
      await this.loadingProvider.present('Autenticando usuário');

      await this.authProvider.setAuth();

      setTimeout( async() => {
        await this.loadingProvider.dismiss();
        this.router.navigate(['/tabs']);
      }, 1000);
    }
  }

  makeRegisterApp() {
    this.router.navigate(['/financial-register-initial']);
  }

  paginaNova() {
    this.router.navigate(['pagina-nova-2']);
  }

}
