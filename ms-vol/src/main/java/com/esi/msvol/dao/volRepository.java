package com.esi.msvol.dao;

import com.esi.msvol.entities.Vol;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface volRepository extends CrudRepository<Vol, Long> {

    List<Vol> findByLieudarrive(String lieudarrive);
}
