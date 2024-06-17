import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDelete = async () => {
    await deleteNote()
  }

  return (
    <ActionButton
      onClick={handleDelete}
      {...props}
      className="text-zinc-400/50 hover:border-red-500/70 hover:text-red-500/70 transition-colors duration-100"
    >
      <FaRegTrashCan className="w-4 h-4" />
    </ActionButton>
  )
}
