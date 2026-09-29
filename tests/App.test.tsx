import { render, screen } from '@testing-library/react'
import App from '@/App'
import { MemoryRouter } from 'react-router-dom'

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    expect(container.firstChild).toBeInTheDocument()
  })

  it('displays the hero section', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: /Romantik Anılar/i })).toBeInTheDocument()
  })
})