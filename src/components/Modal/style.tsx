import styled from 'styled-components'

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;

  .modal-container {
    position: relative;
    background: var(--grey-900);
    border: var(--grey-600) 1px solid;
    border-radius: 0.5rem;
    max-width: 380px;
    padding: 1rem;
    box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .input {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .url {
    border-radius: 0.5rem 0 0 0.5rem;
    border: var(--grey-600) 1px solid;
    background: var(--grey-1000);
    padding: 0 1rem;
    font-family: monospace;
    height: 2.5rem;
    overflow-x: scroll;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .copy {
    border-radius: 0 0.5rem 0.5rem 0;
    height: 2.5rem;
    padding: 0 0.5rem;
    border: var(--grey-600) 1px solid;
    background: var(--grey-900);
    display: flex;
    align-items: center;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    img {
      max-width: 100%;
    }
  }

  i {
    white-space: nowrap;
    :before {
      content: '$ ';
    }
  }

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }

  strong {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--cyan);
  }

  @media (max-width: 768px) {
    .modal-container {
      max-width: 90%;
    }
  }
`
