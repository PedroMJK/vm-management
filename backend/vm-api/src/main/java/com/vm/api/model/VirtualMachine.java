package com.vm.api.model;

import jakarta.persistence.*;
import java.time.LocalDateTime; // Para armazenar data e hora (sem fuso horário)

@Entity
public class VirtualMachine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    // Atributos da máquina virtual
    private Long id;
    private String name;
    private String status;
    private int cpuCores;
    private int ramGB;
    private int diskGB;
    private LocalDateTime createdAt = LocalDateTime.now();

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getCpuCores() {
        return cpuCores;
    }

    public void setCpuCores(int cpuCores) {
        this.cpuCores = cpuCores;
    }

    public int getRamGB() {
        return ramGB;
    }

    public void setRamGB(int ramGB){
        this.ramGB = ramGB;
    }

    public int getDiskGB() {
        return diskGB;
    }

    public void setDiskGB(int diskGB) {
        this.diskGB = diskGB;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

}

