import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";
import { Entry } from "./pages/entries/shared/entry.model";
import { Perfil } from "./pages/usuario/shared/perfil.model";
import { Usuario } from "./pages/usuario/shared/usuario.model";

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
      { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
      { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
      { id: 4, name: 'Salário', description: 'Recebimento de Salário'},
      { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
    ];

    const entries: Entry[] = [
      { id: 1, name: 'Gás de Cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "Qualquer descrição para essa despesa" } as Entry,
      { id: 2, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: false, date: "14/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 3, name: 'Salário na Empresa X', categoryId: categories[3].id, category: categories[3], paid: true, date: "15/10/2018", amount: "4405,49", type: "revenue" } as Entry,
      { id: 4, name: 'Aluguel de Filme', categoryId: categories[2].id, category: categories[2], paid: true, date: "16/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 5, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: true, date: "17/10/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 6, name: 'Video Game da Filha', categoryId: categories[2].id, category: categories[2], paid: false, date: "17/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 11, name: 'Uber', categoryId: categories[1].id, category: categories[1], paid: true, date: "17/10/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 12, name: 'Aluguel', categoryId: categories[2].id, category: categories[2], paid: false, date: "23/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 13, name: 'Gás de Cozinha', categoryId: categories[1].id, category: categories[1], paid: false, date: "25/10/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 14, name: 'Pagamento Pelo Projeto XYZ', categoryId: categories[4].id, category: categories[4], paid: true, date: "25/10/2018", amount: "2980,00", type: "revenue" } as Entry,
      { id: 19, name: 'Aluguel de Filme', categoryId: categories[2].id, category: categories[2], paid: false, date: "07/11/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 21, name: 'Video Game da Filha', categoryId: categories[1].id, category: categories[1], paid: true, date: "17/11/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 22, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: "18/11/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 23, name: 'Jiu Jitsu', categoryId: categories[1].id, category: categories[1], paid: false, date: "21/11/2018", amount: "130,00", type: "expense" } as Entry,
      { id: 44, name: 'Uber', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/11/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 55, name: 'Cinema', categoryId: categories[1].id, category: categories[1], paid: false, date: "28/11/2018", amount: "30,00", type: "expense" }  as Entry
    ];

    const perfils: Perfil[] = [
      {id: 1, nome:"ADMIN"} as Perfil,
      {id: 2, nome:"USER"} as Perfil
    ];

    const usuarios: Usuario[] = [ 
      { id: 1,  nome:"Joao Silva", login:"joao.silva@apolloehs.com", senha:"joaosilva123", perfil: perfils[0], ativo:true} as Usuario,
      { id: 2,  nome:"Pedro Silva", login:"pedro.silva@apolloehs.com", senha:"pedrosilva123", perfil: perfils[0], ativo:true}  as Usuario,
      { id: 3,  nome:"Ana Silva", login:"ana.silva@apolloehs.com", senha:"anasilva123", perfil: perfils[0], ativo:true}  as Usuario,
      { id: 4,  nome:"Maria Silva", login:"maria.silva@apolloehs.com", senha:"mariasilva123", perfil: perfils[0], ativo:false}  as Usuario,
      { id: 5,  nome:"Debora Silva", login:"debora.silva@apolloehs.com", senha:"deborasilva123", perfil: perfils[1], ativo:true}  as Usuario,
      { id: 6,  nome:"Rodrigo Silva", login:"rodrigo.silva@apolloehs.com", senha:"rodrigosilva123", perfil: perfils[1], ativo:true}  as Usuario,
      { id: 7,  nome:"Marcos Silva", login:"marcos.silva@apolloehs.com", senha:"marcossilva123", perfil: perfils[1], ativo:true}  as Usuario,
      { id: 8,  nome:"Daniel Silva", login:"daniel.silva@apolloehs.com", senha:"danielsilva123", perfil: perfils[1], ativo:true}  as Usuario,
      { id: 9,  nome:"Leandro Silva", login:"leandro.silva@apolloehs.com", senha:"leandrosilva123", perfil: perfils[1], ativo:true}  as Usuario,
      { id: 10, nome:"José Silva", login:"jose.silva@apolloehs.com", senha:"josesilva123", perfil: perfils[1], ativo:false}  as Usuario
    ];

    return { categories, entries, usuarios, perfils }
  }
}