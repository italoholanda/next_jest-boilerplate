import styled from 'styled-components'

export const Button = styled.button`
  background-color: var(--grey-900);
  color: var(--white);

  border-radius: 0.3rem;
  border: var(--grey-600) 1px solid;

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    background-color: var(--grey-1000);
  }
`
