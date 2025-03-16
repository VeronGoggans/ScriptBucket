package scriptbucket.architecture.presentation.DTOS;

import scriptbucket.architecture.data.Script;

public record OutboundScriptDTO(

) {
    public static OutboundScriptDTO fromEntity(Script script)
    {
        return new OutboundScriptDTO();
    }
}
