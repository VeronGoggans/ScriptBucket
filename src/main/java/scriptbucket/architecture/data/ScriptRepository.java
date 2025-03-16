package scriptbucket.architecture.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;


public interface ScriptRepository extends JpaRepository<Script, UUID> {
}
