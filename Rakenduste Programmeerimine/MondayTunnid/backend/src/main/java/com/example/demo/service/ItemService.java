package com.example.demo.service;

import com.example.demo.model.Item;
import com.example.demo.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// Teeb beaniks, et oleks võimalik serveris kasutada seda classi
@Service
public class ItemService {

    // seob ära ItemService classi, et oleks koguaeg ligipääs olemas
    // Singleton objekt (ei teki iga kord uut mälukohta)
    @Autowired
    ItemRepository itemRepository;

    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    public void saveItem(Item item) {
        itemRepository.save(item);
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }

    public void editItem(Item item) {
        itemRepository.save(item);
    }

    public Item getOneItem(Long id) throws Exception {
        if (itemRepository.findById(id).isPresent()) {
            return itemRepository.findById(id).get();
        }
        throw new Exception();
    }
}
