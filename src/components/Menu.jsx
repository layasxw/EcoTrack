import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fab from '@mui/material/Fab';
import { useState } from 'react';
import { useTranslation } from "react-i18next"


export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [lang, setLang] = useState("en");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectLang = (newLang) => {
    setLang(newLang);
    changeLanguage(newLang);
    setAnchorEl(null);
  }
  
  const {i18n} = useTranslation()
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div style={{ position: 'fixed', bottom: '3rem', right: '2rem', zIndex: 1000 }}>
      <Fab
        onClick={handleClick}
        sx={{
           borderRadius: "50% !important",   
            minWidth: "unset !important",     
            minHeight: "unset !important",
            width: 56,
            height: 56,
            fontSize: '0.9rem',
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}
      >
        {lang.toLocaleUpperCase()}
      </Fab>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleSelectLang('en')}>English</MenuItem>
        <MenuItem onClick={() => handleSelectLang('ru')}>Русский</MenuItem>
      </Menu>
    </div>
  );
}
