package com.esi.mspellerin.proxy;

import com.esi.mspellerin.model.Hotel;
import org.springframework.stereotype.Component;

@Component
public class HotelFallBack implements HotelProxy {
    @Override
    public Hotel getHotel(Long idh) {
        return new Hotel(idh," Fairmont Makkah Clock Royal Tower","Mekkah"," Ajyad Street");
    }
}
