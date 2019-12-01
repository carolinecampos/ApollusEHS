import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    baseUrl: string = 'http://localhost:8080/usuario';

    getAll() {
        return this.http.get<User[]>(this.baseUrl);
    }

    getById(id: number) {
        return this.http.get(this.baseUrl +"/" + id);
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
}