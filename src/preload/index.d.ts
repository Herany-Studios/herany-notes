import { ElectronAPI } from '@electron-toolkit/preload'
import { GetNotes, ReadNote } from '@shared/types'

declare global {
  interface Window {
    electron: ElectronAPI
    getNotes: GetNotes
    readNote: ReadNote
    api: unknown
  }
}
