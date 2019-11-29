package br.com.carolcampos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.carolcampos.model.Usuario;

@Repository
public interface UsuarioRepository  extends JpaRepository<Usuario, Long>{
	
	@Query("select u from Usuario u where ativo = true and login = :login and senha = :senha")
	Usuario autenticar(@Param("login") String login, @Param("senha") String senha);
	
}
