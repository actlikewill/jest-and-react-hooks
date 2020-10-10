import React from 'react'
import { render } from '@testing-library/react';
import Header from './Header'

it('renders the header', () => {
    const {asFragment} = render(<Header text='Hello' />)
    expect(asFragment()).toMatchSnapshot()
})

it('renders the expected text', () => {
    const {getByTestId, getByText} = render(<Header text='Hello' />)
    expect(getByTestId('header-tag')).toHaveTextContent('Hello')
    expect(getByText('Hello')).toHaveClass('headerStyle')

})