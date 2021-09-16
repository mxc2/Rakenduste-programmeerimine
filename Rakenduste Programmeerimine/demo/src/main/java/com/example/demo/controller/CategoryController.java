package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.model.Item;
import com.example.demo.service.CategoryService;
import com.example.demo.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {
    public CategoryController() {
    }

    @Autowired
    CategoryService categoryService;

    @GetMapping({"categories"})
    public List<Category> getCategories() {
        return categoryService.getCategory();
    }

    @PostMapping({"categories"})
    public String postCategorie(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return "Kategooria edukalt lisatud: " + category.getName();
    }
}

//Delete päring
//Edit Päring
//View one item pärin   g
