import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

export default function NavBar() {
    return(
        <>
            <AppBar elevation={2} sx={{ background: 'linear-gradient(90deg, #CADCAE 60%, #E1E9C9 100%)', boxShadow: '0 2px 12px rgba(202, 220, 174, 0.15)' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', color: '#3E3F29', minHeight: '64px', px: 4 }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, margin: '0 1rem' }}>EcoTrack</Typography>
                    <Button color="inherit" component={Link} to='/' sx={{ fontFamily: 'Montserrat, sans-serif', mx: 1, fontWeight: 600 }} className="navbar-btn">Главная страница</Button>
                    <Button color="inherit" component={Link} to='/habits' sx={{ fontFamily: 'Montserrat, sans-serif', mx: 1, fontWeight: 600 }} className="navbar-btn">Привычки</Button>
                    <Button color="inherit"  component={Link} to='/news' sx={{ fontFamily: 'Montserrat, sans-serif', mx: 1, fontWeight: 600 }} className="navbar-btn">Новости</Button>
                    <Button color="inherit"  component={Link} to='/motiv' sx={{ fontFamily: 'Montserrat, sans-serif', mx: 1, fontWeight: 600 }} className="navbar-btn">Мотивация</Button>
                </Toolbar>
            </AppBar>
            
            {/* <nav>
                <Link to='/'>Home</Link> | <Link to='add'>Add Habit</Link> | <Link to='stats'>Stats</Link>
            </nav> */}
        </>
    )
}