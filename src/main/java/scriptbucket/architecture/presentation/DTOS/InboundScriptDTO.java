package app.scriptbucket.architecture.presentation.DTOS;

import org.springframework.web.multipart.MultipartFile;

public record InboundScriptDTO(
        MultipartFile file
) {
}
