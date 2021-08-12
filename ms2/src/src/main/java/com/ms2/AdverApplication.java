package com.ms2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AdverApplication implements CommandLineRunner {
	
	@Autowired
	AdverService adservice;

	public static void main(String[] args) {
		SpringApplication.run(AdverApplication.class, args);
	}
	// for testing advertisement application.
	@Override
	public void run(String... arg0) {
		
		Adver a1 = new Adver("1", "Wohnung in 1090", "06.05.2018", "Immobilien", "klein aber fein", "12");
		
		Adver a2 = new Adver("2", "Haus in 1190", "02.04.2018", "Immobilien", "in der grüne Lage, Gross", "12");
		
		Adver a3 = new Adver("3", "Garconiere in 1010", "01.01.2017", "Immobilien", "Zenral und Luxus", "134");
		
		Adver a4 = new Adver("4", "Volkswagen Golf", "02.05.2018", "Auto", "Wenig KM", "32");
		
		Adver a5 = new Adver("5", "Opel Astra", "23.07.2018", "Auto", "200 PS", "32");
		
		Adver a6 = new Adver("6", "Renault Clio", "12.05.2018", "Auto", "Super Angebot", "56");
		
		Adver a7 = new Adver("7", "Chefsessel", "31.05.2018", "Marktplatz", "gleich Abholung", "321");
		
		Adver a8 = new Adver("8", "Apple Ipad 3", "22.05.2018", "Marktplatz", "sehr gute Zustand", "987");
		
		Adver a9 = new Adver("9", "Esstisch", "21.07.2018", "Marktplatz", "für 6 Personen", "367");
		
		adservice.addAdver(a1);
		adservice.addAdver(a2);
		adservice.addAdver(a3);
		adservice.addAdver(a4);
		adservice.addAdver(a5);
		adservice.addAdver(a6);
		adservice.addAdver(a7);
		adservice.addAdver(a8);
		adservice.addAdver(a9);
		
	}
}
