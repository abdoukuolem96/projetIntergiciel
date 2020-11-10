package com.esi.mspellerin.proxy;

import com.esi.mspellerin.model.Hotel;
import com.esi.mspellerin.model.Vol;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class VolFallBack implements VolProxy{
    @Override
    public Vol getVol(Long idv) {
        return new Vol(idv,new java.util.Date("2020-11-11"),new java.util.Date("2020-11-12"),"Oran","Mekkah","Agence1","Boeing 737");
    }
}
