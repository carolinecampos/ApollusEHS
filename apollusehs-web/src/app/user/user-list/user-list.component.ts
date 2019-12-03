import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService, AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  currentUser: User;
  currentUserSubscription: Subscription;
  filterForm: FormGroup;

  constructor(private userService: UserService, 
    private router: Router,
    private authenticationService: AuthenticationService,
    protected formBuilder: FormBuilder){
       this.authenticationService.currentUser.subscribe(user => {            
        this.currentUser = user;
    });
    }

  ngOnInit() {
    this.listarUsuarios();
    this.createForm();
  }

  protected createForm() {
    this.filterForm = this.formBuilder.group({
      nome: [""]
    });
  }

  novoUsuario() {
    this.router.navigate(['/user/new']);
  }

  editarUsuario(user) {
    this.userService.userToEdit = user;
    this.router.navigate(['/user/'+user.id]);
  }

  listarUsuarios() {
    this.userService.getAll().pipe(first()).subscribe(users => {
        this.users = users;
    });
  }

  pesquisar() {
    let nome = this.filterForm.value['nome'];
    if (nome === "" || nome === null || nome === undefined) {
      this.listarUsuarios();
    } else {
    this.userService.getByName(this.filterForm.value['nome']).pipe(first()).subscribe(resultado => {
        this.users = resultado;
    });
    }
  }

  deleteUsuario(user) {
    this.userService.delete(user.id).subscribe(user => {
      alert("Apagou o usuário");
      this.listarUsuarios();
    }, error => {
      alert(error);
    });
  }

  isAdmin(user:User) {
    return this.currentUser.perfil==="ADMIN"
  }

}
