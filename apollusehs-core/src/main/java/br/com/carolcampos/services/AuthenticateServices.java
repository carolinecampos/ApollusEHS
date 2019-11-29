package br.com.carolcampos.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.carolcampos.model.Usuario;
import br.com.carolcampos.repository.UsuarioRepository;

@Service
public class AuthenticateServices {
	
	@Autowired
	UsuarioRepository repository;
	
	public Usuario autenticar(String login, String senha) {
		Usuario user = repository.autenticar(login, senha);
		return user;
	}

}
