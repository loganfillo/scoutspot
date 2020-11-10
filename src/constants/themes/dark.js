import { createMuiTheme }  from '@material-ui/core/styles'
import { green, yellow } from '@material-ui/core/colors';

const theme = createMuiTheme({

    palette: {
        type: 'dark',
        primary: {
            main: green[500]
        },
        secondary: {
            main: yellow[400]
        }
    }
})

export default theme;