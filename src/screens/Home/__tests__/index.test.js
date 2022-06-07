import * as React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from '../components/Footer';

it(`homePage renders correctly`, () => {
  const tree = renderer.create(<Footer />).toJSON();

  expect(tree).toMatchSnapshot();
});
