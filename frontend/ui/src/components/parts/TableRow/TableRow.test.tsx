import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { screen } from '@storybook/testing-library'

import * as stories from './TableRow.stories'

describe('TableRow', () => {
  const { Default } = composeStories(stories)
  test('default', () => {
    render(<Default />)
    const row = screen.getByRole('row')
    expect(row.children.length).toEqual(3)
  })
})
