import styled from 'styled-components'

export const Main = styled.main`
  margin-top: 20vh;

  &,
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }

  .brand {
    h1 {
      color: var(--cyan);
    }

    p {
      color: var(--grey-300);
    }

    gap: 1rem;
  }

  .features {
    h2 {
      font-weight: 400;
    }

    ul {
      padding: 1rem;
      gap: 0.5rem;
      display: flex;
      flex-wrap: wrap;
      max-width: 40%;
      justify-content: center;
    }

    li {
      background-color: var(--grey-1000);
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
  }
`
