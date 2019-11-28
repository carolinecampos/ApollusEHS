import { Component, Injector } from '@angular/core';
import { Validators } from "@angular/forms";

import { BaseResourceFormComponent } from "../../../shared/components/base-resource-form/base-resource-form.component"
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from "../shared/usuario.service";
import { PerfilService } from "../shared/perfil.service";
import { Perfil } from '../shared/perfil.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent extends BaseResourceFormComponent<Usuario>  {

  perfils: Array<Perfil>;

  constructor(protected usuarioService: UsuarioService, protected perfilService: PerfilService, protected injector: Injector) { 
    super(injector, new Usuario(), usuarioService, Usuario.fromJson)
  }

  ngOnInit() {
    this.loadPerfils();
    super.ngOnInit();
  }

  private loadPerfils(){
    this.perfilService.getAll().subscribe(
      perfils => this.perfils = perfils
    );
   
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
      login: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      perfil: [null, [Validators.required]],
      ativo: [true]
    });
  }


  protected creationPageTitle(): string {
    return "Cadastro de Novo Usuário";
  }

  protected editionPageTitle(): string {
    const usuarioNome = this.resource.nome || "";
    return "Editando Usuário: " + usuarioNome;
  }

}
