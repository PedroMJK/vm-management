package com.vm.api.service;

import com.vm.api.model.VirtualMachine;
import com.vm.api.repository.VirtualMachineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VirtualMachineService {

    @Autowired
    private VirtualMachineRepository repository;

    // Para buscar todas as VMs
    public List<VirtualMachine> findAll() {
        return repository.findAll();
    }

    // Para buscar VM por Id
    public Optional<VirtualMachine> findById(Long id) {
        return repository.findById(id);
    }

    // Para criar uma nova VM
    public VirtualMachine create(VirtualMachine vm) {
        return repository.save(vm);
    }

    // Para atualizar uma VM existente
    public VirtualMachine update(Long id, VirtualMachine updateVM) {
       return repository.findById(id).map(vm -> {
        vm.setName(updateVM.getName());
        vm.setStatus(updateVM.getStatus());
        vm.setCpuCores(updateVM.getCpuCores());
        vm.setRamGB(updateVM.getRamGB());
        vm.setDiskGB(updateVM.getDiskGB());
        return repository.save(vm);
       }).orElseThrow(() -> new RuntimeException("VirtualMachine not found with id " + id));
    }

    // Para deletar uma VM
    public void delete(Long id) {
        repository.deleteById(id);
    }
    
}
