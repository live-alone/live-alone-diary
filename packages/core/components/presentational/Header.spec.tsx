import { render } from '@testing-library/react';
import 'jest-styled-components';
import HeaderWrapper from '@presentational/Header';
import React from 'react';

test('it works', () => {
  const { container } = render(<HeaderWrapper landing={false} />);
  expect(container.children[0]).toMatchSnapshot();
  expect(container.children[0]).toHaveStyleRule('display', 'flex');
});
