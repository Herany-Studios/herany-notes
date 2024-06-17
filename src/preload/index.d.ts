import { ElectronAPI } from '@electron-toolkit/preload'
import { GetNotes, ReadNote, WriteNote } from '@shared/types'

declare global {
  interface Window {
    electron: ElectronAPI
    getNotes: GetNotes
    readNote: ReadNote
    writeNote: WriteNote
    api: unknown
  }
}
