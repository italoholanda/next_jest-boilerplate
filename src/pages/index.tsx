import Header from 'components/Header'
import Modal from 'components/Modal'
import { useState } from 'react'
import Main from 'sections/Main'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />
      <Main />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  )
}
