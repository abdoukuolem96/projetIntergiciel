package com.esi.mspellerin.entities;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "tohotel", types = Pellerin.class)
public interface PellerinProjectionH {

    @Value("#{target.nom}")
    public String getNomPellerin();

    @Value("#{target.prenom}")
    public String getPrenomPellerin();

}
