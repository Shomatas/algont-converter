import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import {Box} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';

const ButtonReverse = () => {
  const dispatch = useDispatch();

  const reverseCurrency = () => {
    dispatch({type: "REVERSE_CURRENCY"});
  }

  return (
    <Box onClick={reverseCurrency}>
      <CompareArrowsIcon sx={{
        fontSize: "50px",
        cursor: "pointer"
      }}/>
    </Box>
  )
}

export default ButtonReverse;
