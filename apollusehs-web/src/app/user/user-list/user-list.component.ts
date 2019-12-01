import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
//import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, 
    private router: Router){}
    //private userForm : UserFormComponent) { }

  ngOnInit() {
    this.listarUsuarios();
  }

  novoUsuario() {
    this.router.navigate(['/user/new']);
  }

  editarUsuario(user) {
    //this.userForm.toEdit(user);
    this.router.navigate(['/user/new']);
  }

  listarUsuarios() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
  });
  }


}
