// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { PeopleDetails } from '../detailViews/userDetails.js';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import { users, match } from './constants';

test('Should run User Details snapshot test', () => {
	const history = createMemoryHistory()
  const component = renderer.create(
    <Router history={history}>
		  <PeopleDetails users={users} match={match} />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
