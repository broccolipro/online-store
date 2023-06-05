import { Box, Button } from "@mui/material"
import Search from "../components/home-page/Search";
import CategoryMenu from "../components/home-page/CategoryMenu";
import ProductsScreen from "../components/home-page/ProductsScreen";





function Home() {
  return (

    <Box>
      <Search />
      <Box sx={{ display: 'flex' }}>
        <CategoryMenu />
        <ProductsScreen />
      </Box>
    </Box>

  )
}

export default Home