import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('renders the app', () => {
  beforeAll(() => {
    let scriptTag = document.createElement('script');
    document.body.appendChild(scriptTag)
  })
  afterEach(cleanup)
  it('should take a snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });  
})


