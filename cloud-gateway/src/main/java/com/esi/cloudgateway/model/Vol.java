package com.esi.cloudgateway.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vol {
    private Long id;
    private Date datedepart;
    private Date datedarrive;
    private String lieudepart;
    private String lieudarrive;
    private String agance;
    private String avion;
}
