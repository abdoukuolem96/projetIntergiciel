package com.esi.msvol.proxy;

import com.esi.msvol.model.Pellerin;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "ms-pellerin")
public interface ProxyPellerinV {
    @GetMapping("/pellerins/search/findPellerinByNumVol")
    CollectionModel<Pellerin> getLesPellerins(@RequestParam("numVol") Long numVol, @RequestParam("projection") String projection);
}
