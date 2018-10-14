package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@SpringBootApplication
@Controller
public class ApplicationTuto {

    @GetMapping("/")
    public String hello() {
        return "index";
    }

    @GetMapping("/memorisation")
    public String memorisation() {
        return "memorisation";
    }

    @GetMapping("/cv")
    public String cv() {
        return "cv";
    }

    @GetMapping("/zozo")
    public String zozo() {
        return "zozo";
    }

    public static void main(String[] args) {
        SpringApplication.run(ApplicationTuto.class, args);
    }
}

/*
    number_1etnumber_2ont tous deux été incrémentés. Quelle est donc la différence entre les deux procédés ?
        La différence réside en fait dans la priorité de l'opération, et ça a de l'importance si vous voulez récupérer le résultat de l'incrémentation. Dans l'exemple suivant,++numberretourne la valeur denumberincrémentée, c'est-à-dire 1. */