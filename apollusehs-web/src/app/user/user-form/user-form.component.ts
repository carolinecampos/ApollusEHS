import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, AlertService } from 'src/app/_services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../shared/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  isEditing: boolean;

  constructor(private router: Router, private userService: UserService,
    protected formBuilder: FormBuilder, private alertService: AlertService) 
  { 

  }

  ngOnInit() {
    if (this.userService.userToEdit !== undefined) {
      this.editForm(this.userService.userToEdit);
      this.isEditing= true;
    } else {
      this.createForm();
      this.isEditing= false;
    }    
  }

  protected createForm() {
    this.userForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
      login: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      perfil: ["ADMIN", [Validators.required]],
      ativo: [true]
    });
  }

  protected editForm(user:User) {
    this.userForm = this.formBuilder.group({
      id: [user.id],
      nome: [user.nome, [Validators.required, Validators.minLength(2)]],
      login: [user.login, [Validators.required]],
      senha: [user.senha, [Validators.required]],
      perfil: [user.perfil, [Validators.required]],
      ativo: [user.ativo]
    });
  }

  voltar() {
    this.router.navigate(['/user']);
  }

  toEdit(user:User) {
    this.editForm(user);
  }

  limpar() {
    let usuario = new User();
    usuario.ativo=true;
    usuario.perfil="ADMIN";
    this.editForm(usuario);
  }

  salvar(){
    if (this.isEditing) {
      this.userService.update(this.userForm.value).subscribe(user => {          
        this.alertService.success('Cadastrado com sucesso', false);     
      }, error => {
        this.alertService.error(error, true);
      });
    } else {
      this.userService.register(this.userForm.value).subscribe(user => {
        this.alertService.success('Cadastrado com sucesso', false);     
        this.limpar();    
      }, error => {
        this.alertService.error(error, true);
      });
    }    
  }

}
