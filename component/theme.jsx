
import createTheme from 'styled-components-theme';
import colors from './colors' // from Step #1
import size from'./fontsize';

  
const theme = createTheme(...Object.keys(size),)
export default theme;

