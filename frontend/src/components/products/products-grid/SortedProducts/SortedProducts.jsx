import React from 'react';
import InfiniteScroll from './infiniteScroll/InfiniteScroll';

function SortedProducts(props) {
    const sorting_by_price = (products, lowToHigh) => {
        const all_products = [];
        products.map((product) => all_products.push(product));
        if (lowToHigh === 1) {
            for (let i = 0; i < all_products.length - 1; i++) {
                for (let j = i + 1; j < all_products.length; j++) {
                    if (all_products[i].price > all_products[j].price) {
                        const temp = all_products[i];
                        all_products[i] = all_products[j];
                        all_products[j] = temp;
                    }
                }
            }
        } else {
            for (let i = 0; i < all_products.length - 1; i++) {
                for (let j = i + 1; j < all_products.length; j++) {
                    if (all_products[i].price < all_products[j].price) {
                        const temp = all_products[i];
                        all_products[i] = all_products[j];
                        all_products[j] = temp;
                    }
                }
            }
        }
        return all_products;
    };

    const products = sorting_by_price(
        props.data.products,
        props.data.sortFromLowToHigh.lowToHigh
    );

    return (
        <InfiniteScroll
            products={products}
            data={{
                productName: props.data.productName,
                category: props.data.category,
                filterByCategory: props.data.filterByCategory.bind(),
            }}
        />
    );
}

export default SortedProducts;
