import { Container } from "@mui/material";
import NavBar from "./components/navigation-top-bar/Nav-Bar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1400,
            xl: 1536,
        },
    },
});

function App() {
    return (

        <ThemeProvider theme={theme} >
            <>
                <NavBar />
                <Container>
                    <Home />
                    {/* <Orders/>
                <Cart/> */}
                </Container>
            </>
        </ThemeProvider>
    );
}

export default App;
