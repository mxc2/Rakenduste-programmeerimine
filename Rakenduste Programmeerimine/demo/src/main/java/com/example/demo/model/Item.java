package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import org.springframework.stereotype.Component;

@Component
@Entity
public class Item {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private int price;
    private String category;

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public int getPrice() {
        return this.price;
    }

    public String getCategory() {
        return this.category;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public void setPrice(final int price) {
        this.price = price;
    }

    public void setCategory(final String category) {
        this.category = category;
    }

    public Item() {
    }

    public Item(final Long id, final String name, final int price, final String category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
