import { createMuiTheme }  from '@material-ui/core/styles'
import { orange, red } from '@material-ui/core/colors';

const theme = createMuiTheme({

    palette: {
        type: 'dark',
        primary: {
            main: red[900]
        },
        secondary: {
            main: orange[900]
        }
    }
})

export default theme;