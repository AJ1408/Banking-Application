package com.ashish.Banking.management.system.repo;

import com.ashish.Banking.management.system.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankRepo extends JpaRepository<Customer , Integer> {

    // this jpa repository is enough for basic crud operation
    /*
     Because JpaRepository already provides:

     findAll() → Get all customers

     findById(id) → Get customer by ID

     save(customer) → Insert or Update

     deleteById(id) → Delete

     count() → Count rows

     and many more.

     So for basic CRUD, ✅ this code is sufficient.
    */
}
