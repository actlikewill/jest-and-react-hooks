import React from 'react'
import {render, screen, cleanup, waitForElement, waitForElementToBeRemoved} from '@testing-library/react'
import axiosMock from 'axios'
import Fetch from './Fetch'

describe('Fetch', () => {

    afterEach(cleanup)
    it('renders the fetch elemennt', async () => {
        const {getByTestId} = render(<Fetch url="/hello" />)
        expect(getByTestId('loading')).toHaveTextContent('Loading')
        const dataSpan = await waitForElement(() => getByTestId('data'))
        expect(dataSpan).toHaveTextContent('WHUUT')
        expect(axiosMock.get).toHaveBeenCalledTimes(1)
    });
});