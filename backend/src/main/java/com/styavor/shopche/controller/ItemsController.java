package com.styavor.shopche.controller;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.styavor.shopche.config.MockData;
import com.styavor.shopche.models.ShopItem;
import com.styavor.shopche.models.ShopItemDto;
import com.styavor.shopche.repository.ShopRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class ItemsController {

    private final ShopRepository shopRepository;

    @GetMapping("api/v1/items/get")
    public ResponseEntity<List<ShopItem>> getAllItems() {
        return ResponseEntity.ok(MockData.ITEMS);
    }

    @DeleteMapping("api/v1/items/remove/{id}")
    public ResponseEntity<String> removeItem(@PathVariable("id") long itemId) {
        Optional<ShopItem> itemById = MockData.ITEMS.stream()
                .filter(item -> item.id() == itemId)
                .findFirst();

        if (itemById.isEmpty()) {
            return ResponseEntity.badRequest().body("No item with id: " + itemId);
        }

        MockData.ITEMS.remove(itemById.get());

        return ResponseEntity.ok("Successfully removed item");
    }

    @PostMapping("api/v1/items/add")
    public ResponseEntity<ShopItem> addItem(@RequestBody ShopItemDto item) {
        long newId = 1 + MockData.ITEMS.stream()
                .max(Comparator.comparing(ShopItem::id))
                .map(ShopItem::id)
                .orElse(0L);

        var shopItem = new ShopItem(newId, item.getPrice(), item.getPublisher(), LocalDateTime.now());
        MockData.ITEMS.add(shopItem);


        return ResponseEntity.ok(shopItem);
    }

    @PutMapping("api/v1/items/edit/{id}")
    public ResponseEntity<ShopItem> editItem(@PathVariable("id") long itemId, @RequestBody ShopItem updateItemDto) {
        Optional<ShopItem> itemToEdit = MockData.ITEMS.stream()
                .filter(item -> item.id() == itemId)
                .findFirst();

                if (!itemToEdit.isPresent()) {
                    return ResponseEntity.notFound().build();
                }
        
                ShopItem existingItem = itemToEdit.get();
                int index = MockData.ITEMS.indexOf(existingItem);
                
                ShopItem updatedItem = new ShopItem(
                    existingItem.id(),
                    updateItemDto.price(),
                    updateItemDto.publisher(),
                    existingItem.publishedOn()
                );
                MockData.ITEMS.set(index, updatedItem);

                return ResponseEntity.ok(updatedItem);
            }

    }

