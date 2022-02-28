import { useState } from 'react'
import * as Styled from './style'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const link = 'https://github.com/italoholanda/next_jest-boilerplate.git'

const Modal = ({ setIsModalOpen }: Props) => {
  const [isLinkCopied, setIsLinkCopied] = useState(false)

  return (
    <Styled.Modal>
      <div className="modal-container">
        {"Let's start building! 🤘"}
        <div className="input">
          <div className="url">
            <i>
              git clone
              {' ' + link}
            </i>
          </div>
          <div
            className="copy"
            onClick={() => {
              navigator.clipboard.writeText(link)
              setIsLinkCopied(true)
            }}
          >
            <img src="/img/copy.svg" alt="copy" />
          </div>
        </div>
        <span className="close" onClick={() => setIsModalOpen(false)}>
          X
        </span>
        {isLinkCopied && <strong>Successfully copied</strong>}
      </div>
    </Styled.Modal>
  )
}

export default Modal
