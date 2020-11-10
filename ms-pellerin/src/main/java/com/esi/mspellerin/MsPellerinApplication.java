package com.esi.mspellerin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class MsPellerinApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsPellerinApplication.class, args);
	}

}
