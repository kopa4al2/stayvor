package com.styavor.shopche.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ShopRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private final JdbcTemplate jdbcTemplate;


    public Object fetchAllShopItems() {
        return null;
//        return namedParameterJdbcTemplate.queryForObject("SELECT * FROM SHOP_ITEMS", Object.class);
    }
}
