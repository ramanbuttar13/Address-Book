import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import theme from './components/styles/theme';
import { connect } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";

// Routes
import PublicRoute from './routes/PublicRoutes';
import mainRoutes from './routes/mainRoutes';

// UI
import Loader from './components/Loader'

const mapStateToProps = (state) => {
	return {
		loading: state.ui.loading,
	};
};

const App = ({loading}) => {
const publicRoutes = [...mainRoutes];
    return (
			<ChakraProvider theme={theme}>
				<Router basename="/">
					<Switch>
						{publicRoutes.map((prop, key) => {
							return (
							<PublicRoute
								key={key}
								path={prop.path}
								component={prop.component}
								exact={true}
							/>
							);
						})}
						<Redirect to="/" />
					</Switch>
				</Router>
				{loading && <Loader/>}
			</ChakraProvider>
    );
}

export default connect(mapStateToProps)(App)