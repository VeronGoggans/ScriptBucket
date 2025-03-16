package app.scriptbucket.architecture.presentation.controllers;


import app.scriptbucket.architecture.application.ScriptService;
import app.scriptbucket.architecture.data.Script;
import app.scriptbucket.architecture.presentation.DTOS.InboundScriptDTO;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/scripts")
public class ScriptController {
    private final ScriptService scriptService;

    public ScriptController(ScriptService scriptService)
    {
        this.scriptService = scriptService;
    }


    @PostMapping()
    public Script createScript(@RequestBody InboundScriptDTO inboundScriptDTO)
    {
        if (inboundScriptDTO.file().isEmpty())
        {
            return null;
        }
        return scriptService.saveScript(inboundScriptDTO.file());
    }


    @PostMapping("/run/{id}")
    public void runScript(@PathVariable String id)
    {
        UUID scriptId = UUID.fromString(id);

    }


    @GetMapping("/all")
    public List<Script> getAllScripts()
    {
        return scriptService.getAllScripts();
    }


    @DeleteMapping("/{id}")
    public Script deleteScript(@PathVariable String id)
    {
        UUID scriptId = UUID.fromString(id);
        return scriptService.getScriptByID(scriptId);
    }
}
