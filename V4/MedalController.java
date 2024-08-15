public package com.example.medalrecorder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MedalController {

    @Autowired
    private MedalService medalService;

    @GetMapping("/")
    public String showForm(Model model) {
        return "index";
    }

    @PostMapping("/record-medals")
    public String recordMedals(@RequestParam String country, @RequestParam int gold, @RequestParam int silver, @RequestParam int bronze, Model model) {
        Medal medal = new Medal();
        medal.setCountry(country);
        medal.setGold(gold);
        medal.setSilver(silver);
        medal.setBronze(bronze);
        medalService.saveMedal(medal);

        model.addAttribute("message", "Medals Recorded Successfully!");
        return "index";
    }
} 
 {
    
}
