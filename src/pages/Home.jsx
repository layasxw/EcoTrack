import { useEffect, useState } from "react";
import { Typography, Button, Container, Paper, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, } from "recharts";
export default function Home( { habits }) {
    const COLORS = ['#4caf50', '#2196f3', '#ff9800', '#f44336'];
    const navigate = useNavigate()

    const TIPS = [
      "Используй многоразовую бутылку вместо пластиковой.",
      "Выключай воду во время чистки зубов.",
      "Покупай продукты без лишней упаковки.",
      "Выключай электроприборы, когда не используешь.",
      "Планируй покупки — это снижает пищевые отходы.",
      "Пользуйся общественным транспортом или ходи пешком.",
      "Сдавай батарейки и лампы в пункты приёма.",
    ];

    const [tip, setTip] = useState('');

    useEffect(() => {
      const index = Math.floor(Math.random() * TIPS.length);
      setTip(TIPS[index]);
    }, []);

    const toAddHabit = () => {
        navigate('/add')
    }

    const total = habits.length;
    const lastWeekCount = habits.filter(habit => {
      const diff = Date.now() - new Date(habit.date).getTime();
      return diff < 7 * 24 * 60 * 60 * 1000
    }).length;

    const uniqueCategories = new Set(habits.map(habit => habit.category)).size
    const categoryCounts = habits.reduce((acc, h) => {
      acc[h.category] = (acc[h.category] || 0) + 1;
      return acc;
    }, {})

    const pieDate = Object.keys(categoryCounts).map(key => ({
      name: key,
      value: categoryCounts[key]
    }));

    const dayCounts = {};
    habits.forEach(h => {
      const day = new Date(h.date).toLocaleDateString();
      dayCounts[day] = (dayCounts[day] || 0) + 1;
    });
    const lineData = Object.keys(dayCounts).map(day => ({
      date: day,
      count: dayCounts[day]
    }));

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', position: 'relative' }}>
      <div style={{
        background: '#CADCAE',
        borderRadius: '24px',
        boxShadow: '0 4px 32px rgba(202, 220, 174, 0.18)',
        padding: '3rem 2rem',
        maxWidth: '540px',
        textAlign: 'center',
        margin: '4rem auto 2rem auto',
      }}>
        <Typography variant="h3" sx={{ fontWeight: 700, color: '#3E3F29', fontFamily: 'Montserrat, sans-serif', mb: 2 }}>
          EcoTrack
        </Typography>
        <Typography variant="h5" sx={{ color: '#EDA35A', fontWeight: 600, fontFamily: 'Montserrat, sans-serif', mb: 2 }}>
          Экопривычки каждый день
        </Typography>
        <Typography sx={{ color: '#3E3F29', fontSize: '1.1rem', mb: 4 }}>
          Приложение, где пользователь отмечает экологичные действия, уменьшая свой углеродный след и способствуя спасению планеты
        </Typography>
        <Button onClick={toAddHabit} sx={{ fontSize: '1.1rem', px: 4, py: 1.5, fontWeight: 600, borderRadius: '12px', boxShadow: '0 2px 8px rgba(237, 163, 90, 0.10)' }}>
          Добавить привычку
        </Button>
      </div>
      <div style={{ position: 'fixed', top: '6rem', right: '2rem', zIndex: 1000 }}>
        <Paper 
          elevation={3}
          sx={{
            width: 220,
            p: 2,
            bgcolor: "#f9f9f9",
            fontSize: "0.9rem",
            borderLeft: "4px solid #ccc",
            fontWeight: 600, color: '#3E3F29', fontFamily: 'Montserrat, sans-serif', mb: 2 
          }}>{tip}</Paper>
      </div>
      <div>
        <Typography variant="h6">
          {habits.length > 0
          ? "Продолжай в том же духе!"
          : "Начни с первой привычки уже сегодня!"}
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Всего привычек</Typography>
                <Typography variant="h5">{total}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">За неделю</Typography>
                <Typography variant="h5">{lastWeekCount}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Категорий</Typography>
                <Typography variant="h5">{uniqueCategories}</Typography>
              </Paper>
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">По категориям</Typography>
                <div style={{ width: 300, height: 300, margin: '0 auto' }}>
                  <PieChart width={300} height={300}>
                    <Pie data={pieDate} dataKey={'value'} fill="#ccc">
                      {pieDate.map((_, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]}/>
                      ))}
                    </Pie>
                  </PieChart>
                </div>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Динамика по дням</Typography>
                <div style={{ width: 300, height: 300, margin: '0 auto' }}>
                  <LineChart width={300} height={300} data={lineData}>
                      <CartesianGrid />
                      <XAxis dataKey="date" />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Line type="monotone" dataKey="count" stroke="#4caf50" />
                  </LineChart>
                </div>
              </Paper>
            </Grid>
        </Grid>

      </div>
    </Container>
  );
}