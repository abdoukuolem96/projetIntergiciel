package com.esi.mspellerin.dao;

import com.esi.mspellerin.entities.Pellerin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;
import java.util.List;

@RepositoryRestResource
public interface PellerinRepository extends JpaRepository<Pellerin, Long> {
    public List<Pellerin> findPellerinByNumHotel(Long numHotel);
    public List<Pellerin> findPellerinByNumVol(Long numVol);
//    public List<Pellerin> findPellerinByNom(String nom);

//    /search/findPellerinByNumHotel?numHotel=1&projection=tohotel
}
