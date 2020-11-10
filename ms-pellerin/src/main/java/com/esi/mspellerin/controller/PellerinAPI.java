package com.esi.mspellerin.controller;

import com.esi.mspellerin.dao.PellerinRepository;
import com.esi.mspellerin.entities.Pellerin;
import com.esi.mspellerin.exceptions.RecordAlreadyPresentException;
import com.esi.mspellerin.exceptions.RecordNotFoundException;
import com.esi.mspellerin.model.Hotel;
import com.esi.mspellerin.model.Vol;
import com.esi.mspellerin.proxy.HotelProxy;
import com.esi.mspellerin.proxy.VolProxy;
import com.esi.mspellerin.service.PellerinService;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pellerin")
public class PellerinAPI {
    @Autowired
    PellerinService pellerinService;
    @Autowired
    PellerinRepository pellerinRepository;

    @Autowired
    HotelProxy hotelProxy;
    @Autowired
    VolProxy volProxy;


    @PostMapping("/addPellerin")
    @ExceptionHandler(RecordAlreadyPresentException.class)
    public void addHotel(@RequestBody Pellerin pellerin) {
        pellerinService.addPellerin(pellerin);
    }

    @GetMapping("/allPellerin")
    public Iterable<Pellerin> viewAllPellerin() {
        return pellerinService.viewAllPellerins();
    }

    @GetMapping("/viewPellerin/{id}")
    @ExceptionHandler(RecordNotFoundException.class)
    public Pellerin viewPellerin(@PathVariable("id") Long numPasseport) {
        return pellerinService.viewPellerin(numPasseport);
    }

    @PutMapping("/updatePellerin")
    @ExceptionHandler(RecordNotFoundException.class)
    public void modifyPellerin(@RequestBody Pellerin pellerin) {
        pellerinService.modifyPellerin(pellerin);
    }

    @DeleteMapping("/deletePellerin/{id}")
    @ExceptionHandler(RecordNotFoundException.class)
    public void removePellerin(@PathVariable("id") Long numPasseport) {
        pellerinService.removePellerin(numPasseport);
    }

    @GetMapping("/pellerins/{id}")
    public Pellerin getPellerinWithHotel(@PathVariable("id") Long id) {
        Pellerin pellerin = pellerinRepository.findById(id).get();
        Hotel hotel = hotelProxy.getHotel(pellerin.getNumHotel());
        pellerin.setHotel(hotel);

        return pellerin;
    }

//    @GetMapping("/pellerinsV/{id}")
//    public Pellerin getPellerinWithVol(@PathVariable("id") Long id) {
//        Pellerin pellerin = pellerinRepository.findById(id).get();
//        Vol vol = volProxy.getVol(pellerin.getNumVol());
//        pellerin.setVol(vol);
//
//        return pellerin;
//    }

    @GetMapping("/pellerinsV/{id}")
    public Pellerin getPellerinWithVol(@PathVariable("id") Long id) {
        Pellerin pellerin = pellerinRepository.findById(id).get();
        Vol vol = volProxy.getVol(pellerin.getNumVol());
        pellerin.setVol(vol);
        return pellerin;
    }

//    @GetMapping("pellerinNom/{nom}")
//    public List<Pellerin> getPellerinByNom(@PathVariable("nom") String nom) {
//        List<Pellerin> pellerin = pellerinRepository.findPellerinByNom(nom);
//        return pellerin;
//    }


}
