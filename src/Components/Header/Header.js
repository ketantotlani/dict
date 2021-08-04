import { TextField,createTheme, ThemeProvider, MenuItem } from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../Data/category'

const Header = ({ setCategory, category, word , setWord, lightmode}) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main:lightmode ? "#000": "#fff",
            },
          type:lightmode? "light": 'dark',
        },
      });

      const handleChange = (language) => {
        setCategory(language);
        setWord('');
      }

    return (
        <div className="header">
            <span className="title" >{word ? word :"Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField value={word} onChange={(e) => setWord(e.target.value)} className="search" label="Search a Word"   ></TextField>
                        <TextField
                        select
                        className="select"
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                        // helperText="Please select your language"
                        >
                            {
                                categories.map((option) => (
                                        <MenuItem key={option.label} value={option.label}>
                                        {option.value}
                                        </MenuItem>
                                ))
                            }
                            
                        </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
