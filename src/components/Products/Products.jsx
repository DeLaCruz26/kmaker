import React from 'react';
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'

const products = [
    { id: 1, name: 'Custom T-Shirt', description: 'Custom t-shirt design.', price: '$20', image: 'https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/124374998_372948674129178_3140417798868930364_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_ohc=RSgg0vA4mzcAX-e8_j9&_nc_ht=scontent-atl3-2.xx&oh=f1bfac5619e813d20a38cb1e99561898&oe=60E8C0CE' },
    { id: 2, name: 'Custom Mugs', description: 'Add any design to your mug!', price: '$20', image: 'https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/120200249_338611937562852_1138766648601867182_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=a26aad&_nc_ohc=MXb4VUUkDwEAX-7QVN2&_nc_ht=scontent-atl3-2.xx&oh=a8c91f5a2d304802b14bfe9377469414&oe=60E86016' },
    { id: 3, name: 'Custom Face Masks', description: 'Add a desgin to your face mask.', price: '$20', image: 'https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/131723214_399301534827225_4459266413641153980_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_ohc=tfkQdXyko5IAX8KMRa2&_nc_ht=scontent-atl3-2.xx&oh=a5678c5b02e85dc394129135c2822121&oe=60E7BC7A' }
]

const Products = () => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
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
