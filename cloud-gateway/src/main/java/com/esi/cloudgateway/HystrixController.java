package com.esi.cloudgateway;

import com.esi.cloudgateway.model.Hotel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HystrixController {

    @GetMapping("defaultHotels")
    public List<Hotel> getFormatons() {
        List<Hotel> hotels = new ArrayList<>();
        hotels.add(new Hotel(1L, "Hotel default 1", "Mekkah", "22000"));
        hotels.add(new Hotel(2L, "Hotel default 2", "Madinah", "31000"));

        return hotels;
    }

    @GetMapping("defaultPellerins")
    public String message() {
        return "le service pellerin n'est plus disponible";
    }

    @GetMapping("defaultVols")
    public String message2()
    {
        return "le service vol n'est plus disponible";
    }

}
