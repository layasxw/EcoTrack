import { MenuItem, FormControl, InputLabel, Select, Button } from "@mui/material";
import { useEffect, useState } from "react";


export default  function HabitsList( { habits, setHabits} ) {
    const categories = [
      "Сортировка мусора",
      "Ходить пешком",
      "Отказ от пластика",
      "Экономия воды",
      "Экономия электричества"
    ];
    const [filterCategory, setFilterCategory] = useState('');
    
    const filteredHabits = filterCategory ? habits.filter(habit => habit.category === filterCategory) : habits;

    useEffect(() => {
            const savedHabits = JSON.parse(localStorage.getItem('ecoHabbits') || '[]');
            setHabits(savedHabits);
    }, [setHabits]);
    
    const isCurrentHabit = (isDate) => {
      const ms = Date.now() - new Date(isDate).getTime();
      return ms < 24 * 60 * 60 * 1000;
    } 

    const deleteHabit = (id) => {
      const updated = habits.filter(habit => habit.id !== id);
      setHabits(updated);
      localStorage.setItem('ecoHabbits', JSON.stringify(updated));
    }

    return (
      <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Категория</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterCategory}
              label="Категория"
              onChange={(e) => setFilterCategory(e.target.value)}
            >
            <MenuItem value={''}>Выбрать категорию</MenuItem>
            {categories.map((category) => 
              <MenuItem key={category} value={category}>{category}</MenuItem>
            )}
          </Select>
        </FormControl>
        {filteredHabits.map((habit, index) => (
          <div
              key={index}
              style={{
                background: '#ffffffff',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(237, 163, 90, 0.10)',
                padding: '1.5rem 1.2rem',
                minWidth: '320px',
                maxWidth: '480px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, color: '#EDA35A', fontSize: '1.1rem', marginBottom: '0.2rem' }}>{habit.category}</div>
                <div style={{ color: '#3E3F29', fontSize: '1rem', marginBottom: '0.2rem' }}>{habit.description}</div>
                {/* <div style={{ color: '#888', fontSize: '0.95rem' }}>{new Date(habit.date).toLocaleDateString()}</div> */}
                {isCurrentHabit(habit.date) ? (
                  <div style={{  
                  color: '#2E7D32',             
                  fontSize: '0.95rem',                   
                  fontWeight: 600,
                  margin: '4px 0'}}>{new Date(habit.date).toLocaleDateString()}</div>
                ) : (
                  <div style={{ color: '#888', fontSize: '0.95rem' }}>{new Date(habit.date).toLocaleDateString()}</div>
                )}
                <Button onClick={() => deleteHabit(habit.id)}>Удалить</Button>
              </div>
            </div>
        ))}
        
      </div>
    );
}
