package scriptbucket.architecture.data;
import app.scriptbucket.architecture.application.ScriptType;
import jakarta.persistence.*;

import java.util.Date;
import java.util.UUID;


@Entity
@Table(name = "scripts")
public class Script {
    @Id
    @GeneratedValue
    private UUID id;

    private String name;
    private String path;
    private ScriptType type;
    private Date createdAt;
    private Date lastRun;
    private ScriptStatus status;

    public Script() {}

    public Script(String name, String path, ScriptType type) {
        this.name = name;
        this.path = path;
        this.type = type;
        this.status = ScriptStatus.IDLE;
    }
}
