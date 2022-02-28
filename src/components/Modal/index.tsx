import * as Styled from './style'

interface Props {
  setIsModalOpen: (state: boolean) => void
}

const Modal = ({ setIsModalOpen }: Props) => {
  return (
    <Styled.Modal>
      <div className="modal-container">
        {"Let's start building! 🤘"}
        <div className="input">
          <div className="url">
            <i>
              git clone
              https://github.com/italoholanda/next_jest-boilerplate.git
            </i>
          </div>
          <div className="copy">
            <img src="/img/copy.svg" alt="copy" />
          </div>
        </div>
        <span className="close" onClick={() => setIsModalOpen(false)}>
          X
        </span>
      </div>
    </Styled.Modal>
  )
}

export default Modal
