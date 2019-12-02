import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(private authenticationService: AuthenticationService) { 
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {            
      this.currentUser = user;
  });
  }

  ngOnInit() {
  }

}
