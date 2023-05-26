import { Box, Button } from "@mui/material"
import Search from "../components/home-page/Search";
import CategoryMenu from "../components/home-page/CategoryMenu";





function Home() {
  return (

    <Box>
      <Search />
      <CategoryMenu/>
    </Box>

  )
}

export default Home