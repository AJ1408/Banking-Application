package com.ashish.Banking.management.system.service;


import com.ashish.Banking.management.system.model.Customer;
import com.ashish.Banking.management.system.repo.BankRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankService {

    @Autowired
    private BankRepo repo;


    public List<Customer> getAllCustomer(){
        return repo.findAll();
    }

    public Customer getCustomerById(Integer id){
        return repo.findById(id).orElse(null);
    }

    public Customer createCustomer(Customer customer){

        return  repo.save(customer);
    }

    public Customer updateCustomer( Integer id ,Customer customer){
        List<Customer> allCustomers = repo.findAll();
        for(Customer customer1: allCustomers){
            if(customer1.getId() == id){
                customer1.setName(customer.getName());
                customer1.setEmail(customer.getEmail());
                customer1.setBalance(customer.getBalance());
                return repo.save(customer1);
            }

        }
        return null ;
    }
    public void deleteCustomer(Integer id) {
        if(repo.existsById(id)){
            repo.deleteById(id);
        }
    }
}
