import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['/user']);
  }

  toEdit(user) {

  }

}
