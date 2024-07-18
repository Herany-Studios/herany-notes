import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { GrAdd } from 'react-icons/gr'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton
      onClick={handleCreation}
      {...props}
      className="text-white hover:text-white hover:border-white transition-colors duration-100"
    >
      <GrAdd className="w-4 h-4" />
    </ActionButton>
  )
}
