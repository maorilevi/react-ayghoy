import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import './mixins/chartjs';
import routes from './routes';
import theme from './theme';
const App = () => {
    const routing = useRoutes(routes);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {routing}
        </ThemeProvider>
    );
};

export default App;
