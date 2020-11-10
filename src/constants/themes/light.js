import { createMuiTheme }  from '@material-ui/core/styles'
import { green, yellow} from '@material-ui/core/colors';

const theme = createMuiTheme({
    
    palette: {
        type: 'light',
        primary: {
            main: green[400]
        },
        secondary: {
            main: yellow[300]
        }
    }
})

export default theme;