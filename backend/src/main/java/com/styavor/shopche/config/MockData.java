package com.styavor.shopche.config;

import com.styavor.shopche.models.ShopItem;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class MockData {

    public static List<ShopItem> mockItems() {
        return new ArrayList<>(List.of(
                new ShopItem(1L, 1.03F, "Pesho", LocalDateTime.now()),
                new ShopItem(2L, 5.53F, "IVan", LocalDateTime.now().minusHours(35)),
                new ShopItem(3L, 6.06F, "Dragan", LocalDateTime.now().minusDays(4)),
                new ShopItem(4L, 32.33F, "Yavor", LocalDateTime.now().minusHours(2))
        ));
    }

    public static List<ShopItem> ITEMS = mockItems();
}
