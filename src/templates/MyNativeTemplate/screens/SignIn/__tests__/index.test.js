import * as React from 'react';
import renderer from 'react-test-renderer';
import { SignInTemplate} from '../';

it(`signIn renders correctly`, () => {
  const tree = renderer.create(<SignInTemplate />).toJSON();

  expect(tree).toMatchSnapshot();
});
