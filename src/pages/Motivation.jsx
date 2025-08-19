import { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Motivation() {
  const {t} = useTranslation(); 
  const quotes = [
    // Общая мотивация
    "Маленькие шаги ведут к большим переменам ",
    "Сегодня лучше, чем вчера!",
    "Ты ближе к цели, чем думаешь ",
    "Каждое действие имеет значение.",
    "Не обязательно быть идеальным, важно быть постоянным.",
    "Успех — это сумма маленьких усилий, повторяемых каждый день.",
    "Не жди вдохновения, начни действовать — и оно придёт.",
    "Лучшее время начать было вчера. Второе лучшее время — сегодня.",
    "Важнее путь, чем скорость.",
    "Один день дисциплины может изменить всю твою жизнь.",

    // Про привычки
    "Сильные привычки — сильная личность.",
    "Делай каждый день на 1% больше.",
    "Каждая привычка формирует твоё будущее.",
    "Повторение — мать привычки.",
    "Ты становишься тем, что делаешь ежедневно.",
    "Не сдавайся на третий день — именно тогда и формируется привычка.",

    // Про экологию и здоровье
    "Береги природу — она бережёт тебя ",
    "Маленькое экологичное действие лучше большого бездействия.",
    "Чистая планета начинается с чистого двора.",
    "Сегодня — сортировка мусора, завтра — чище воздух.",
    "Здоровые привычки делают жизнь ярче.",
    "Пей воду, как будто это твой главный ресурс ",
    "Солнце, воздух и вода — твои лучшие друзья.",

    // Про упорство
    "Неудачи — это шаги к успеху.",
    "Не останавливайся, пока не будешь гордиться собой.",
    "Твой прогресс важнее чужого результата.",
    "Каждое утро — новый шанс всё изменить.",
    "Если устал — научись отдыхать, а не сдаваться.",
    "Путь к цели прямым не бывает — но он всё равно ведёт туда."
  ];
  const COLORS = ['#4caf50', '#f44336'];
  const [goal, setGoal] = useState({
    target: 0,
    period: 'month',
    startDate: null
  })
  const [currentQuote, setCurrentQuote] = useState('');
  useEffect(() => {
    const savedGoal = JSON.parse(localStorage.getItem('goal') || '{"target": 0, "period": "month", "startDate": null}');
    setGoal(savedGoal); 
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);
  return(
    <>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', position: 'relative' }}>
  <div className="card" style={{ maxWidth: '540px', textAlign: 'center', margin: '4rem auto 2rem auto' }}>
          <Typography 
            variant="h3" 
            sx={{
              textAlign: 'center',
              color: '#EDA35A',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              mb: 3
            }}
          >
            {t('motivation.title')}
          </Typography>
          <Typography sx={{ color: '#3E3F29', fontSize: '1.1rem', mb: 1, fontFamily: 'Montserrat, sans-serif' }}>{goal.target}</Typography>
          <Typography sx={{ color: '#3E3F29', fontSize: '1.1rem', mb: 1, fontFamily: 'Montserrat, sans-serif' }}>{currentQuote}</Typography>
          <Button onClick={() => setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)])} sx={{mt: 2, fontFamily: 'Montserrat, sans-serif', fontWeight: 600}}>{t('motivation.quoteBtn')}</Button>
        </div>
      </Container>
    </>
  )
}