import { useEffect, useState } from "react";
import { Container, TextField, Button, MenuItem, Typography, Alert } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
export default function AddHabit( {habits, setHabits}) {
    const [category, setCategory] = useState('');
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("success");
    const [description, setDescription] = useState('');
    
    

    useEffect(() => {
        const savedHabits = JSON.parse(localStorage.getItem('ecoHabbits') || '[]');
        setHabits(savedHabits);
    }, [setHabits])

    const handleSubmit = () => {
        if(!category) {
            // TODO alert from mui
            setAlertMessage('Выберите категорию');
            setAlertSeverity('error')
            return;
        }

        const newHabit = {
            id: uuidv4(),
            category,
            description,
            date: new Date().toISOString(),
        };

        
        const updatedHabits = [...habits, newHabit];
        localStorage.setItem('ecoHabbits', JSON.stringify(updatedHabits));
        setHabits(updatedHabits); // 🔥 ВАЖНО: обновляем состояние

        setCategory('');
        setDescription('');
        setAlertSeverity('success');
        setAlertMessage('Привычка добавлена!');
        

    }
  return(
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80vh', justifyContent: 'flex-start' }}>
      <div style={{
        background: '#CADCAE',
        borderRadius: '24px',
        boxShadow: '0 4px 32px rgba(202, 220, 174, 0.18)',
        padding: '2.5rem 2rem',
        maxWidth: '540px',
        width: '100%',
        margin: '4rem 0 2rem 0',
      }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#3E3F29', fontFamily: 'Montserrat, sans-serif', mb: 3, textAlign: 'center' }}>
          Добавить экопривычку
        </Typography>
        <TextField 
          select
          label='Категория'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          sx={{ mb: 2, background: '#E1E9C9', borderRadius: '8px' }}
        >
          <MenuItem value='Сортировка мусора'>Сортировка мусора</MenuItem>
          <MenuItem value='Ходить пешком'>Ходить пешком</MenuItem>
          <MenuItem value='Отказ от пластика'>Отказ от пластика</MenuItem>
          <MenuItem value='Экономия воды'>Экономия воды</MenuItem>
          <MenuItem value='Экономия электричества'>Экономия электричества</MenuItem>
        </TextField>
        <TextField
          label="Комментарий"
          fullWidth
          value={description}
          placeholder="Комментарий"
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mb: 2, background: '#FEE8D9', borderRadius: '8px' }}
        />
        {alertMessage &&
          <Alert severity={alertSeverity} sx={{ mb: 2 }}>{alertMessage}</Alert>
        }
        <Button variant="contained" onClick={handleSubmit} sx={{ width: '100%', fontSize: '1.1rem', py: 1.5, fontWeight: 600, borderRadius: '12px', boxShadow: '0 2px 8px rgba(237, 163, 90, 0.10)', mb: 3 }}>
          Сохранить привычку
        </Button>
      </div>
    </Container>
  )
}