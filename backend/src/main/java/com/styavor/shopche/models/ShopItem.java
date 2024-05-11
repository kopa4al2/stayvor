package com.styavor.shopche.models;

import lombok.Data;

import java.time.LocalDateTime;

public record ShopItem(long id, float price, String publisher, LocalDateTime publishedOn) {
}
