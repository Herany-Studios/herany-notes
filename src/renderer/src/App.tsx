import {
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  MarkDownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import { ActionButtonsRow } from '@/components/ActionButtonsRow'
import { useRef } from 'react'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <div className="flex flex-col pl-4 pr-4">
          <ActionButtonsRow className="flex justify-between mt-12" />
          <Sidebar className="mt-8">
            <NotePreviewList className="space-y-1" onSelect={resetScroll} />
          </Sidebar>
        </div>
        <Content ref={contentContainerRef} className="border-l bg-zinc-900 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkDownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
