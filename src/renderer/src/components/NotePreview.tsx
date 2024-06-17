import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}) => {
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={cn(
        'relative p-0.5 rounded-md transition-colors duration-75',
        {
          'bg-gradient-to-b from-[#00c8fa] to-[#00fa64]': isActive,
          'hover:bg-zinc-500/75': !isActive && 'bg-gray-900'
        },
        className
      )}
      {...props}
    >
      <div className="bg-zinc-900 rounded-md p-2.5">
        <h3 className="mb-1 font-bold truncate text-white">{title}</h3>
        <span className="inline-block w-full mb-2 text-xs font-light text-left text-gray-400">
          {date}
        </span>
      </div>
    </div>
  )
}
