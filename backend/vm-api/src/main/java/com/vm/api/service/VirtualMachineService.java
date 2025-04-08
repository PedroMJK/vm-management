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

    public List<VirtualMachine> findAll() {
        return repository.findAll();
    }

    public Optional<VirtualMachine> findById(Long id) {
        return repository.findById(id);
    }

    public VirtualMachine create(VirtualMachine vm) {
        if (repository.count() >= 5) {
            throw new RuntimeException("Limite de 5 VMs atingido.");
        }
        vm.setStatus("RUNNING");
        return repository.save(vm);
    }

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

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public VirtualMachine changeStatus(Long id, String status) {
        return repository.findById(id).map(vm -> {
            vm.setStatus(status);
            return repository.save(vm);
        }).orElseThrow(() -> new RuntimeException("VirtualMachine not found with id " + id));
    }

    public VirtualMachine startVM(Long id) {
        return changeStatus(id, "RUNNING");
    }

    public VirtualMachine pauseVM(Long id) {
        return changeStatus(id, "PAUSED");
    }

    public VirtualMachine stopVM(Long id) {
        return changeStatus(id, "STOPPED");
    }
}
