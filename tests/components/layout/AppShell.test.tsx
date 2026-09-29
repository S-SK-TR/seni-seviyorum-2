import { render, screen } from '@testing-library/react'
import { AppShell } from '@/components/layout/AppShell'
import { MemoryRouter } from 'react-router-dom'

describe('AppShell', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    )
    expect(container.firstChild).toBeInTheDocument()
  })

  it('displays navigation links', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: /Anasayfa/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Anılarımız/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Ayarlar/i })).toBeInTheDocument()
  })
})