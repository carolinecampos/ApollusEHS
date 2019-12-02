import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService, AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  constructor(private userService: UserService, 
    private router: Router,
    private authenticationService: AuthenticationService){
       this.authenticationService.currentUser.subscribe(user => {            
        this.currentUser = user;
    });
    }

  ngOnInit() {
    this.listarUsuarios();
  }

  novoUsuario() {
    this.router.navigate(['/user/new']);
  }

  editarUsuario(user) {
    this.router.navigate(['/user/'+user.id]);
  }

  listarUsuarios() {
    this.userService.getAll().pipe(first()).subscribe(users => {
        this.users = users;
    });
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
