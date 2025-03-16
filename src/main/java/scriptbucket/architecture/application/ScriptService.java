package scriptbucket.architecture.application;

import scriptbucket.architecture.data.Script;
import scriptbucket.architecture.data.ScriptManager;
import scriptbucket.architecture.data.ScriptRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;


@Service
public class ScriptService {
    private final ScriptRepository scriptRepository;
    private final ScriptManager scriptManager;

    public ScriptService(ScriptRepository scriptRepository, ScriptManager scriptManager)
    {
        this.scriptRepository = scriptRepository;
        this.scriptManager = scriptManager;
    }


    public Script saveScript(MultipartFile file)
    {
        // Create & save a copy of the script file
        scriptManager.createFile(file);

        return null;
    }


    public List<Script> getAllScripts()
    {
        return scriptRepository.findAll();
    }


    public Script getScriptByID(UUID scripId)
    {
        return scriptRepository.findById(scripId).orElse(null);
    }


    public void runScript()
    {

    }
}
