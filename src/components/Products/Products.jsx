import React from 'react';
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

const products = [
    { id: 1, name: 'T-Shirt', description: 'Custom t-shirt design.', price: '$20' },
    { id: 2, name: 'Custom Mugs', description: 'Add any design to your mug!', price: '$20' },
    { id: 3, name: 'Custom Print Face Masks', description: 'Add you favorite desgin to your face mask.', price: '$20' }
]

const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={2}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;
