import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    public userToEdit: User;
    constructor(private http: HttpClient) { }

    baseUrl: string = 'http://localhost:8080/usuario';

    getAll() {
        return this.http.get<User[]>(this.baseUrl);
    }

    getById(id: number) {
        return this.http.get(this.baseUrl +"/" + id);
    }

    getByName(nome: string) {
        return this.http.get<User[]>(this.baseUrl +"/filtrar/" + nome);
    }

    register(user: User) {
        user.ativo=true;
        user.perfil="ADMIN";
        return this.http.post(this.baseUrl, user);
    }

    update(user: User) {
        return this.http.put(this.baseUrl, user);
    }

    delete(id: number) {        
        return this.http.delete(this.baseUrl + "/" + id);
    }

    alterarSenha(user:User) {        
        return this.http.put(this.baseUrl+"/alterarSenha/", user);
    }

}