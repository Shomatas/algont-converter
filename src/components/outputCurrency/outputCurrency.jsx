import { Box } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormLabel } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import {useSelector, useDispatch} from "react-redux";

const OutputCurrency = () => {
  let data = useSelector(state => state.inputCur);
  let outData = useSelector(state => state.outputCur);
  let quotes = useSelector(state => state.quotes);
  const dispatch = useDispatch();

  const changeValue = (event) => {
    dispatch({type: "CHANGE_CURRENCY_OUTPUT", payload: event.target.value});
  }


  return(
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: "50px",
    }}
    >
      <Box sx={{
        width: 300
      }}>
      <FormLabel>Я получу</FormLabel>
        <FormControl sx={{
          display: 'flex',
        }} fullWidth
        >
          <Select
            value={outData.default}
            labelId="moneyInput"
            id="inp"
            onChange={changeValue}
          >
            <MenuItem value="RUB">RUB</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EU">EU</MenuItem>

          </Select>
        </FormControl>
        <TextField
          disabled
          value={outData.value}
          fullWidth/>
        <FormLabel>{`1 ${outData.default} = ${(quotes.get(outData.default).get(data.default)).toFixed(4)} ${data.default}`}</FormLabel>
      </Box>
    </Box>
  )
}

export default OutputCurrency;
