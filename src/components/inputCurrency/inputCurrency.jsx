import { Box } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormLabel } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import {useSelector, useDispatch} from "react-redux";

const InpputCurrency = () => {
  let data = useSelector(state => state.inputCur);
  let outData = useSelector(state => state.outputCur);
  let quotes = useSelector(state => state.quotes);
  const dispatch = useDispatch();

  const changeValue = (event) => {
    dispatch({type: "CALCULATE_CURRENCY", payload: event.target.value});
  }

  const changeValueSelect = (event) => {
    dispatch({type: "CHANGE_CURRENCY_INPUT", payload: event.target.value});
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
      <FormLabel>У меня есть</FormLabel>
        <FormControl sx={{
          display: 'flex',
        }} fullWidth
        >
          <Select
            value={data.default}
            onChange={changeValueSelect}
            labelId="moneyInput"
            id="inp"
          >
            <MenuItem value="RUB">RUB</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EU">EU</MenuItem>

          </Select>
        </FormControl>
        <TextField
          onChange={changeValue}
          value={data.value}
          fullWidth/>
        <FormLabel>{`1 ${data.default} = ${(quotes.get(data.default).get(outData.default)).toFixed(4)} ${outData.default}`}</FormLabel>
      </Box>
    </Box>
  )
}

export default InpputCurrency;
