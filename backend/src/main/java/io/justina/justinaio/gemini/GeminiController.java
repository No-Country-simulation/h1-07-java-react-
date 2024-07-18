package io.justina.justinaio.gemini;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("gemini")
@RequiredArgsConstructor
@Tag(name = "Gemini")
public class GeminiController {

    private final GeminiService aiService;

    @PostMapping("/chat")
    public String chat(@RequestBody String prompt) {
        return this.aiService.chat(prompt);
    }

}