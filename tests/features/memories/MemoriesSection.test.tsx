import { render, screen } from '@testing-library/react'
import { MemoriesSection } from '@/features/memories/MemoriesSection'

describe('MemoriesSection', () => {
  const mockMemories = [
    {
      id: 1,
      title: 'İlk Buluşma',
      description: 'İlk defa tanıştığımız gün, şimdi anı olarak kalıyor.',
      image: 'test-image.jpg'
    }
  ]

  it('renders without crashing', () => {
    const { container } = render(<MemoriesSection memories={mockMemories} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('displays the section title', () => {
    render(<MemoriesSection memories={mockMemories} />)
    expect(screen.getByRole('heading', { name: /Romantik Anılarımız/i })).toBeInTheDocument()
  })

  it('displays memory cards', () => {
    render(<MemoriesSection memories={mockMemories} />)
    expect(screen.getByText(/İlk Buluşma/i)).toBeInTheDocument()
    expect(screen.getByText(/İlk defa tanıştığımız gün, şimdi anı olarak kalıyor/i)).toBeInTheDocument()
  })
})