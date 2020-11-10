package com.esi.mspellerin.proxy;

import com.esi.mspellerin.model.Vol;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@FeignClient(name = "ms-vol", fallback = VolFallBack.class)
public interface VolProxy {

    @GetMapping("/api/getVol/{id}")
    public Vol getVol(@PathVariable("id") Long idv);
}
