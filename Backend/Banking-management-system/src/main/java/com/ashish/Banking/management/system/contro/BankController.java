package com.ashish.Banking.management.system.contro;

import com.ashish.Banking.management.system.model.Customer;
import com.ashish.Banking.management.system.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "http://localhost:5173")
public class BankController {
    @Autowired
    private BankService service ;


    //Get all customers
    @GetMapping
    public List<Customer> getAll(){
        System.out.println("hi");
        return service.getAllCustomer();
    }

    //Get customer by id
    @GetMapping("/{id}")
    public Customer getById(@PathVariable Integer id){
        return service.getCustomerById(id);
    }

    //post create new customer
    @PostMapping()
    public Customer create(@RequestBody Customer customer){
        return service.createCustomer(customer);
    }

    //for updation
    @PutMapping("/{id}")
    public Customer updateCustomer( @PathVariable Integer id,@RequestBody Customer customer){
        return service.updateCustomer(id ,customer);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        service.deleteCustomer(id);
    }
}
