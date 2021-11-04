package com.example.demo.controller;

import com.example.demo.model.Item;
import com.example.demo.service.ItemService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Teeb beaniks, et oleks võimalik serveris kasutada seda classi
@RestController
// CORS
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    // seob ära ItemService classi, et oleks koguaeg ligipääs olemas
    @Autowired
    ItemService itemService;

    // localhost:8080/items ja GET päring
    @GetMapping("items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    // localhost:8080/items ja POST päring
    @PostMapping("items")
    public void postItem(@RequestBody Item item) {
        itemService.saveItem(item);
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @ApiOperation("API otspunkt eseme muutmiseks, alati saata kaasa ID")
    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item) {
        itemService.editItem(item);
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception {
        return itemService.getOneItem(id);
    }

}
