import React from 'react';
import { mount } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const wrapper = mount(<App />);
  expect(wrapper).to.have.length(1);
});
