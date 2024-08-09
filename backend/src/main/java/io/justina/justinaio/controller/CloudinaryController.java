package io.justina.justinaio.controller;

import io.justina.justinaio.model.Imagen;
import io.justina.justinaio.services.CloudinaryService;
import io.justina.justinaio.services.ImagenService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("cloudinary")
@RequiredArgsConstructor
@Tag(name = "cloudinary - subir imagenes a cloudinary", description = "subir imagenes a cloudinary")
//@CrossOrigin
public class CloudinaryController {

    private final CloudinaryService cloudinaryService;

    private final ImagenService imagenService;


    @PostMapping("/subir-imagen-retorna-id-imagen")
    public ResponseEntity<?> subirYRetornarId(@RequestParam MultipartFile multipartFile)throws IOException {
        BufferedImage bi = ImageIO.read(multipartFile.getInputStream());
        if(bi == null){
            return new ResponseEntity<>("Imagen no valida", HttpStatus.BAD_REQUEST);
        }
        Map result = cloudinaryService.upload(multipartFile);
        Imagen imagen = Imagen.builder()
                .nombre((String)result.get("original_filename"))
                .url((String)result.get("url"))
                .imagenIdCloud((String)result.get("public_id"))
                .build();
        return ResponseEntity.ok(imagenService.guardarYObtenerId(imagen));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id)throws IOException {
        if(!imagenService.exists(id))
            return new ResponseEntity<>("Imagen no encontrada", HttpStatus.NOT_FOUND);
        Imagen imagen = imagenService.getOne(id).get();
        Map result = cloudinaryService.delete(imagen.getImagenIdCloud());
        imagenService.delete(id);
        return new ResponseEntity<>("Imagen eliminada", HttpStatus.OK);
    }
}
