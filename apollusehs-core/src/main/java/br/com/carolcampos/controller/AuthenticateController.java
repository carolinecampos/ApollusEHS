package br.com.carolcampos.controller;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.carolcampos.model.Usuario;
import br.com.carolcampos.services.AuthenticateServices;

@CrossOrigin
@RestController
@RequestMapping("/autenticar")
public class AuthenticateController {
	
	@Autowired
	private AuthenticateServices service;
	
	@ApiOperation(value = "Realiza a autenticação do usuário.")
	@GetMapping
	public Usuario autenticar(@RequestParam("login") String login, @RequestParam("senha") String senha) {
		return service.autenticar(login, senha);
	}
	
}
