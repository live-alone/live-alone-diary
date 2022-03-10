import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import ButtonWrapper from './Button';

test('it works', () => {
  const { container } = render(<ButtonWrapper />);
  expect(container.children[0]).toMatchSnapshot();
  expect(container.children[0]).toHaveStyleRule('color', 'green');
});
