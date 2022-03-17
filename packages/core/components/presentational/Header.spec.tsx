import { render } from '@testing-library/react';
import 'jest-styled-components';
import HeaderWrapper from '@presentational/Header';
import React from 'react';

test('landing false check', () => {
  const { container } = render(<HeaderWrapper landing={false} />);
  expect(container.children[0]).toMatchSnapshot();
  expect(container.children[0]).toHaveStyleRule('background', '#fff');
});

test('landing true check', () => {
  const { container } = render(<HeaderWrapper landing={true} />);
  expect(container.children[0]).toMatchSnapshot();
  expect(container.children[0]).toHaveStyleRule('background', 'transparent');
});
