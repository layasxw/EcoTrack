import {newsData} from '../mock/newsData.js';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box} from '@mui/material';
import { useTranslation } from "react-i18next";

export default function News() {
    const {t} = useTranslation(); 
    return(
        <Container sx={{py: 7}}>
            <Typography 
            variant='h3'
            sx={{
                textAlign: 'center',
                color: '#EDA35A',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                mb: 4
            }}
            >
                {t('news.newsTitle')}
            </Typography>

            <Grid container spacing={4}>
                {newsData.map((item) => (
                    <Grid item key={item.id} xs={12} sm={5} md={4}>
                        <Card 
                            sx={{
                                height: '100%', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                borderRadius: '16px', 
                                boxShadow: 3
                            }}>
                                <CardMedia
                                component={"img"}
                                height={'200'}
                                image={item.imageUrl}
                                alt={item.title}
                                />
                                <CardContent>
                                                                        <Typography
                                                                            variant='h6'
                                                                            fontWeight={600}
                                                                            sx={{ fontFamily: 'Montserrat, sans-serif', color: '#3E3F29' }}>
                                                                                {item.title}
                                                                        </Typography>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: '#3E3F29' }}>
                                        {item.summary}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: '#888', fontSize: '0.95rem' }}>
                                        {item.date}
                                    </Typography>
                                </CardContent>
                        </Card>
                    </Grid>
                    

                ))}
                
            </Grid>
            
        </Container>
    )
}