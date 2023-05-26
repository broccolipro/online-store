import { InputAdornment, TextField, useMediaQuery } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider, styled, useTheme } from '@mui/material/styles';
import { Box } from "@mui/material"


const theme = createTheme({
    palette: {
        primary: {
            main: '#424242'
        }
    }
})

const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') { // Проверяем, что нажата клавиша Enter
        event.preventDefault(); // Отменяем стандартное действие (например, отправку формы)

        alert('Hello bratunea')
    }
};

const SearchBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '40px',
    alignItems: 'stretch',
    paddingTop: '20px',
    paddingBottom: '20px',
    marginBottom: '20px '
}))

function Search() {

    const themeGlob = useTheme();
    const isMobile = useMediaQuery(themeGlob.breakpoints.down('sm'));

    return (
        <SearchBox sx={{ display: 'flex', justifyContent: 'center' }} >
            <ThemeProvider theme={theme}>
                <TextField
                    type="search"
                    fullWidth
                    placeholder='Search products'
                    sx={{ 
                        borederWidth: '1px',
                        width: {
                            md: '70%'
                        }
                     }}
                    onKeyDown={handleKeyPress}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end' >
                                <LoadingButton sx={{
                                    bgcolor: '#F1F1F1',
                                    color: 'inherit',
                                    minWidth: {
                                        xs: '20px',
                                        md: '90px'
                                    }
                                }} >
                                    <SearchIcon />
                                    {isMobile ? '' : 'Search'}
                                </LoadingButton>
                            </InputAdornment>
                        )
                    }}
                />
            </ThemeProvider>
        </SearchBox>
    )
}

export default Search