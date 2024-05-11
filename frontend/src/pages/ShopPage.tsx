import React from 'react';
import HeaderLayout from "../components/layout/Header";
import ItemsTable from "../components/shop/ItemsTable";

function ShopPage(props) {
    return (
        <HeaderLayout>
            <ItemsTable/>
        </HeaderLayout>
    );
}

export default ShopPage;