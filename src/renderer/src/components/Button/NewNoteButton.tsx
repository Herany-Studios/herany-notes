import { ActionButton, ActionButtonProps } from '@/components'
import { GrAdd } from 'react-icons/gr'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <GrAdd className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
