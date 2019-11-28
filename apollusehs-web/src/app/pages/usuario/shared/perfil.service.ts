import { Injectable, Injector } from '@angular/core';
import { Perfil } from "./perfil.model";

import { BaseResourceService } from "../../../shared/services/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends BaseResourceService<Perfil> {

  constructor(protected injector: Injector) {
    super("api/perfils", injector, Perfil.fromJson);
  }

}