import { cn } from '@/lib/utils'

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white')
    expect(cn('p-4', 'm-2', 'p-2')).toBe('m-2 p-2')
  })

  it('handles conditional classes', () => {
    expect(cn('text-black', false && 'text-white')).toBe('text-black')
    expect(cn(true && 'bg-blue-500', 'text-white')).toBe('bg-blue-500 text-white')
  })
})