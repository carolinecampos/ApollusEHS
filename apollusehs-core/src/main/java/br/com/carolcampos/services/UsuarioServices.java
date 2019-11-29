package br.com.carolcampos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.carolcampos.exception.ResourceNotFoundException;
import br.com.carolcampos.model.Usuario;
import br.com.carolcampos.repository.UsuarioRepository;

@Service
public class UsuarioServices {
	
	@Autowired
	UsuarioRepository repository;
	
	public Usuario create(Usuario usuario) {
		return repository.save(usuario);
	}
	
	public List<Usuario> findAll() {
		return repository.findAll();
	}	
	
	public Usuario findById(Long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
	}
		
	public Usuario update(Usuario usuario) {
		Usuario entity = repository.findById(usuario.getId())
				.orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
		
		entity.setNome(usuario.getNome());
		entity.setLogin(usuario.getLogin());
		entity.setSenha(usuario.getSenha());
		entity.setPerfil(usuario.getPerfil());
		entity.setAtivo(usuario.isAtivo());
		
		return repository.save(entity);
	}	
	
	public void delete(Long id) {
		Usuario entity = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
		repository.delete(entity);
	}
	
	public Usuario alterarSenha(Usuario usuario) {
		Usuario entity = repository.findById(usuario.getId())
				.orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
		entity.setSenha(usuario.getSenha());
		return repository.save(entity);
	}

}
