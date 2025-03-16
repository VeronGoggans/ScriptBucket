package app.scriptbucket.architecture.presentation.DTOS;

import app.scriptbucket.architecture.data.Script;

public record OutboundScriptDTO(

) {
    public static OutboundScriptDTO fromEntity(Script script)
    {
        return new OutboundScriptDTO();
    }
}
