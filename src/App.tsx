import { useEffect, useState } from 'react'
import { NavBar } from './components/layout/NavBar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Aktuelles } from './components/sections/Aktuelles'
import { Disziplinen } from './components/sections/Disziplinen'
import { Schuetzenhaus } from './components/sections/Schuetzenhaus'
import { UeberUns } from './components/sections/UeberUns'
import { Mitmachen } from './components/sections/Mitmachen'
import { Kontakt } from './components/sections/Kontakt'
import { Modal } from './components/ui/Modal'
import { ImpressumContent } from './components/sections/Impressum'
import { DatenschutzContent } from './components/sections/Datenschutz'

type ActiveModal = 'impressum' | 'datenschutz' | null

function getModalFromHash(hash: string): ActiveModal {
  if (hash === '#impressum') return 'impressum'
  if (hash === '#datenschutz') return 'datenschutz'
  return null
}

function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(
    () => getModalFromHash(window.location.hash)
  )

  useEffect(() => {
    const onHashChange = () => {
      const modal = getModalFromHash(window.location.hash)
      setActiveModal(modal)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  function closeModal() {
    setActiveModal(null)
    history.pushState('', document.title, window.location.pathname)
  }

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Aktuelles />
        <Disziplinen />
        <Schuetzenhaus />
        <UeberUns />
        <Mitmachen />
        <Kontakt />
      </main>
      <Footer />

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'impressum'}
        onClose={closeModal}
        title="Impressum"
      >
        <ImpressumContent />
      </Modal>

      <Modal
        isOpen={activeModal === 'datenschutz'}
        onClose={closeModal}
        title="Datenschutz"
      >
        <DatenschutzContent />
      </Modal>
    </>
  )
}

export default App
