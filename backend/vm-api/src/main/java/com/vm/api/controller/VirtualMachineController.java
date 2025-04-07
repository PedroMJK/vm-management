package com.vm.api.controller;

import com.vm.api.model.VirtualMachine;
import com.vm.api.service.VirtualMachineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Para que o frontend consiga consumir os endpoints
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/vms")
public class VirtualMachineController {

    @Autowired
    private VirtualMachineService service;

    @GetMapping
    public ResponseEntity<List<VirtualMachine>> getAllVirtualMachines() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<VirtualMachine> getVirtualMachineById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<VirtualMachine> createVirtualMachine(@RequestBody VirtualMachine vm) {
        VirtualMachine created = service.create(vm);
        return ResponseEntity.ok(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<VirtualMachine> updateVirtualMachine(@PathVariable Long id, @RequestBody VirtualMachine vm) {
        try {
            VirtualMachine updated = service.update(id, vm);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVirtualMachine(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
