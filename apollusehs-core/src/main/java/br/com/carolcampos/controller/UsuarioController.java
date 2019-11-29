package br.com.carolcampos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.carolcampos.model.Usuario;
import br.com.carolcampos.services.UsuarioServices;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@CrossOrigin
@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioServices service;
	
	@ApiOperation(value = "Buscar todos os usuários.")
	@ApiResponses(value = {
	    @ApiResponse(code = 200, message = "Retorna a lista de usuários"),
	    @ApiResponse(code = 500, message = "Contrate o desenvolvedor para corrigir o erro"),
	})
	@GetMapping	
	public List<Usuario> findAll() {
		return service.findAll();
	}	
	
	@ApiOperation(value = "Buscar um usuário pelo seu identificador.")
	@ApiResponses(value = {
		    @ApiResponse(code = 200, message = "Retorna o usuário"),
		    @ApiResponse(code = 404, message = "Usuário não encontrado"),
		    @ApiResponse(code = 500, message = "Contrate o desenvolvedor para corrigir o erro"),
	})
	@GetMapping("/{id}")
	public Usuario findById(@PathVariable("id") Long id) {
		return service.findById(id);
	}	
	
	@ApiOperation(value = "Criar um usuário.")
	@PostMapping
	public Usuario create(@RequestBody Usuario usuario) {
		return service.create(usuario);
	}
	
	@ApiOperation(value = "Atualizar um usuário.")		
	@PutMapping
	public Usuario update(@RequestBody Usuario usuario) {
		return service.update(usuario);
	}	
	
	@ApiOperation(value = "Apagar um usuário.")	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") Long id) {
		service.delete(id);
		return ResponseEntity.ok().build();
	}	
	
	@ApiOperation(value = "Altera a senha do usuário.")
	@ApiResponses(value = {		   
		    @ApiResponse(code = 404, message = "Usuário não encontrado")
	})
	@PutMapping("/alterarSenha")
	public Usuario alterarSenha(@RequestBody Usuario usuario) {
		return service.alterarSenha(usuario);
	}

}
