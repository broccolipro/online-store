import { Home } from '@mui/icons-material'
import { ListItemDecorator } from '@mui/joy'
import { Box, Divider, List, ListItem, ListItemButton, Paper } from '@mui/material'

const categories = ['Electronic', 'Smartphone', 'Kids', 'Watches', 'Home', 'Kitchen', 'Beauty', 'Cars & Motot', 'Parties & Events', 'Women\'s Fashion', 'Sexual Wellness']

function CategoryMenu() {
    return (
        <Box sx={{
            flexGrow: 0,
            display: 'flex',

        }}>

            <List>
                {categories.map(cat => (
                    <ListItem key={cat} sx={{ fontFamily: "'Montserrat', regular;", paddingTop: '0', paddingBottom: '0' }}>
                        <ListItemButton>
                            <ListItemDecorator sx={{ marginRight: '10px ' }}>
                                <Home />
                            </ListItemDecorator>
                            {cat}
                        </ListItemButton>
                    </ListItem>
                ))}

            </List>
            <Divider orientation="vertical" flexItem/>
        </Box>
    )
}

export default CategoryMenu