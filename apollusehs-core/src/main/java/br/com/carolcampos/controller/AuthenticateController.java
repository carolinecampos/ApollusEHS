package br.com.carolcampos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.carolcampos.model.Usuario;
import br.com.carolcampos.services.AuthenticateServices;

@RestController
@RequestMapping("/autenticar")
public class AuthenticateController {
	
	@Autowired
	private AuthenticateServices service;
	
	@GetMapping
	public Usuario autenticar(@RequestParam("login") String login, @RequestParam("senha") String senha) {
		return service.autenticar(login, senha);
	}
	
}
