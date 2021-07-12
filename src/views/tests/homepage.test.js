// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { Homepage } from '../homepage.js';
import { createMemoryHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import { render, fireEvent, act } from '@testing-library/react';
import theme from '../../components/styles/theme';
import { ChakraProvider } from "@chakra-ui/react";
import '@testing-library/jest-dom';
import { users } from './constants';

test('Should run Homepage snapshot test', () => {
  const history = createMemoryHistory()
  const component = renderer.create(
    <Router history={history}>
		  <Homepage users={users} setUsers={() => {}} setLoading={() => {}} />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should render Homepage', async () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <ChakraProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/">
            <Homepage users={users} setUsers={() => {}} setLoading={() => {}} />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
  expect(getByText(/Nuvalence/i)).toBeInTheDocument()
  await act(async () => {
    fireEvent.click(getByText(/Dylan/i));
  });
});
