import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container, Switch, withStyles } from '@material-ui/core';
import Header from './Components/Header/Header';
import Definitions from './Components/Definitions/Definitions';
import { grey } from '@material-ui/core/colors';

function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [lightmode, setlightmode] = useState(false)

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      // console.log(data);
      setMeanings(data.data)
    } catch(error) {
      console.log(error);
    }
  }
  console.log(meanings);

  


  useEffect(() => {
    dictionaryApi();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word, category])


  return (
    <div className="App" style={{height: '100vh', backgroundColor:lightmode? "#fff" : '#282c34', color: lightmode ? "black" :'white' , transition: "all 0.5s linear"}}>
      <Container maxWidth="md" style={{display: 'flex', flexDirection: 'column', height:'100vh', justifyContent:"space-evenly" }}>
        <div style={{position: "absolute", top:0, right: 15, padding: 10}}>
          <span>{lightmode ?"Dark" :"Light"} Mode</span>
          <DarkMode checked={lightmode} onChange={()=> setlightmode(!lightmode)}/>
        </div>
        <Header word={word} setWord={setWord}  category={category} setCategory={setCategory} lightmode={lightmode}/>
       {meanings && (<Definitions lightmode={lightmode} word={word} meanings={meanings} category={category}/>) }
      </Container>
    </div>
  );
}

export default App;
