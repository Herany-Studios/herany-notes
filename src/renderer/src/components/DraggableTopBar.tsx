import { VscChromeClose, VscChromeMinimize } from 'react-icons/vsc'

export const DraggableTopBar = () => {
  const handleMinimize = () => {
    window.context.minimizeWindow()
  }

  const handleClose = () => {
    window.context.closeWindow()
  }

  return (
    <div>
      <header className="absolute inset-0 h-10 bg-transparent" />
      <div className="absolute right-0 flex items-center h-10 px-2 space-x-2">
        <button
          onClick={handleMinimize}
          className="w-8 h-8 flex items-center justify-center text-lg text-gray-400 hover:text-white focus:outline-none"
          title="Minimize"
        >
          <VscChromeMinimize />
        </button>
        <button
          onClick={handleClose}
          className="w-8 h-8 flex items-center justify-center text-lg text-gray-400 hover:text-red-500 focus:outline-none"
          title="Minimize"
        >
          <VscChromeClose />
        </button>
      </div>
    </div>
  )
}
