package com.example.demo.controller;

import com.example.demo.model.Item;
import com.example.demo.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {
    public ItemController() {
    }

    @Autowired
    ItemService itemService;

    @GetMapping({"items"})
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping({"items"})
    public String postItem(@RequestBody Item item) {
        itemService.saveItem(item);
        return "Ese edukalt lisatud " + item.getName();
    }
}

//Delete päring
//Edit Päring
//View one item päring
