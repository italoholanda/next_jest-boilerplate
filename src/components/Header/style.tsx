import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  background-color: var(--grey-900);
  box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.8);

  > div,
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
`
