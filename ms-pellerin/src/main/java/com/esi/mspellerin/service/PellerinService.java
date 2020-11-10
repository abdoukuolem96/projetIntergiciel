package com.esi.mspellerin.service;

import com.esi.mspellerin.entities.Pellerin;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PellerinService {
    public ResponseEntity<?> addPellerin(Pellerin pellerin);

    public Iterable<Pellerin> viewAllPellerins();

    public Pellerin viewPellerin(Long numPasseport);

    public Pellerin modifyPellerin(Pellerin pellerin);

    public String removePellerin(Long numPasseport);

//    public List<Pellerin> getPellerinHotel(Long numHotel);
}
