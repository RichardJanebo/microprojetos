package com.webapp.userdept.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.webapp.userdept.entitities.User;


public interface UserRepository extends JpaRepository<User,Long> {

    
}
