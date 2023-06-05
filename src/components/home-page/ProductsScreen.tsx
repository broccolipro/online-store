import { Box, Grid } from '@mui/material'
import ProductCard from './ProductCard'

function ProductsScreen() {
    return (
        <Box flexGrow={1} padding={'5px'}>
            <Grid container spacing={1} padding={0}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Grid>
        </Box>
    )
}

export default ProductsScreen