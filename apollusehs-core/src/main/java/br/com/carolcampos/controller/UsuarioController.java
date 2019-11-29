package br.com.carolcampos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	

	@Autowired
	private UsuarioServices service;
	
	@GetMapping
	public List<Usuario> findAll() {
		return service.findAll();
	}	
	
	@GetMapping("/{id}")
	public Usuario findById(@PathVariable("id") Long id) {
		return service.findById(id);
	}	
	
	@PostMapping
	public Usuario create(@RequestBody Usuario usuario) {
		return service.create(usuario);
	}
	
	@PutMapping
	public Usuario update(@RequestBody Usuario usuario) {
		return service.update(usuario);
	}	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") Long id) {
		service.delete(id);
		return ResponseEntity.ok().build();
	}	

}
