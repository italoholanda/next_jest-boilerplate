import styled from 'styled-components'

export const Button = styled.button`
  background-color: var(--grey-600);
  color: var(--white);

  border-radius: 0.5rem;
  border: var(--grey-1000) 1px solid;

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    background-color: var(--grey-1000);
  }
`
