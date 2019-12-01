import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private router: Router, private userService: UserService,
    protected formBuilder: FormBuilder) 
  { 

  }

  ngOnInit() {
    this.createForm();
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

  voltar() {
    this.router.navigate(['/user']);
  }

  toEdit(user) {

  }

  salvar(){

  }

}
