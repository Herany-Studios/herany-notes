import { ElectronAPI } from '@electron-toolkit/preload'
import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'

declare global {
  interface Window {
    electron: ElectronAPI
    ipcRenderer: IpcRenderer
    getNotes: GetNotes
    readNote: ReadNote
    writeNote: WriteNote
    createNote: CreateNote
    deleteNote: DeleteNote
    api: unknown
  }
}
