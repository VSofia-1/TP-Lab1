package com.example.medalrecorder;

import org.springframework.data.repository.CrudRepository;

public interface MedalRepository extends CrudRepository<Medal, Long> {
}
title: MedalService.java



package com.example.medalrecorder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedalService {

    @Autowired
    private MedalRepository medalRepository;

    public void saveMedal(Medal medal) {
        medalRepository.save(medal);
    }
} medalRepository {
    
}
