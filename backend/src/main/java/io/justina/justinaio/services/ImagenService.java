package io.justina.justinaio.services;

import io.justina.justinaio.model.Imagen;
import io.justina.justinaio.repositories.ImagenRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class ImagenService {

    private final ImagenRepository imagenRepository;


    public Optional<Imagen> getOne(int id){
        return imagenRepository.findById(id);
    }

    public Integer guardarYObtenerId(Imagen imagen){
        return imagenRepository.save(imagen).getIdImagen();
    }

    public void delete(int id){
        imagenRepository.deleteById(id);
    }

    public boolean exists(int id){
        return imagenRepository.existsById(id);
    }
}
