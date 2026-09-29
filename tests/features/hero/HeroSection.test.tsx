import { render, screen } from '@testing-library/react'
import { HeroSection } from '@/features/hero/HeroSection'

describe('HeroSection', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <HeroSection title="Test Title" subtitle="Test Subtitle" />
    )
    expect(container.firstChild).toBeInTheDocument()
  })

  it('displays the provided title and subtitle', () => {
    render(
      <HeroSection title="Romantik Anılar" subtitle="Bizim hikayemiz" />
    )
    expect(screen.getByText(/Romantik Anılar/i)).toBeInTheDocument()
    expect(screen.getByText(/Bizim hikayemiz/i)).toBeInTheDocument()
  })
})