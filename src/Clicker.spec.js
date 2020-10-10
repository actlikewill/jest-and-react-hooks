import React from 'react'
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react'
import Clickers from './Clickers'

describe('ClicketTest', () => {
    afterEach(cleanup)

    it('should render the Clicker Component', () => {
        const { getByTestId } = render(<Clickers />)
        expect(getByTestId('count')).toHaveTextContent('0')
    });

    it('should increase the count', () => {
        const { getByTestId } = render(<Clickers />)
        fireEvent.click(getByTestId('increase'))       
        expect(getByTestId('count')).toHaveTextContent('1')
    });

    it('should decrease after delay', async () => {
        const { getByTestId, getByText } = render(<Clickers />)
        fireEvent.click(getByTestId('decrease'))
        const counter = await waitForElement(() => getByText('-1'))
        expect(counter).toHaveTextContent('-1')

    });
});