import * as React from 'react';
import renderer from 'react-test-renderer';
import { SignInTemplate } from '../';

it(`signInTemplate renders correctly`, () => {
  const tree = renderer.create(<SignInTemplate />).toJSON();

  expect(tree).toMatchSnapshot();
});
