import InputCurrency from './components/inputCurrency/inputCurrency.jsx';
import OutputCurrency from './components/outputCurrency/outputCurrency.jsx';
import ButtonReverse from './components/buttonReverse/buttonReverse.jsx';
import {useSelector} from "react-redux";
import {Box} from '@mui/material';

const App = () => {
  let inp = useSelector( state => state.inputCur);

  return (
    <div>
      <Box sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <InputCurrency />
        <ButtonReverse />
        <OutputCurrency />
      </Box>
    </div>
  );
}

export default App;
