import { createMuiTheme }  from '@material-ui/core/styles'
import { orange, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    
    palette: {
        type: 'light',
        primary: {
            main: red[400]
        },
        secondary: {
            main: orange[400]
        }
    }
})

export default theme;