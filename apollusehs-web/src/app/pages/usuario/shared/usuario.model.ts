import { BaseResourceModel } from "../../../shared/models/base-resource.model";

import { Perfil } from "../shared/perfil.model";

export class Usuario extends BaseResourceModel {
  constructor(
    public id?:number,
    public nome?: string,
    public login?: string,
    public senha?: string,
    public perfil?: Perfil,
    public ativo?:boolean
  ){
    super();
  }
  

  static fromJson(jsonData: any): Usuario {
    return Object.assign(new Usuario(), jsonData);
  }
}