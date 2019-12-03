import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService, AuthenticationService, AlertService } from 'src/app/_services';
import { User } from 'src/app/_models';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(private userService: UserService, protected formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,  private alertService: AlertService,
    private router: Router) { 
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {            
        this.currentUser = user;
    });
    }

  ngOnInit() {
    this.createForm();
  }

  protected createForm() {
    this.changePasswordForm = this.formBuilder.group({
      senha: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]]
    });
  }

  alterar() {
    let novaSenha = this.changePasswordForm.value['senha'];
    this.currentUser.senha = novaSenha
    this.userService.alterarSenha(this.currentUser).subscribe(usuario => {      
      this.alertService.success('Senha alterada com sucesso', true);   
      this.router.navigate(['/meu-perfil']);
    }, error => {
      alert(error);
    })
  }

}
