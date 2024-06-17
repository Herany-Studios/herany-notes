import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from './NotePreview'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0) {
    return (
      <ul className={twMerge('text-center pt-10', className)} {...props}>
        <span>No Notes</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notesMock.map((note) => (
        <NotePreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}
