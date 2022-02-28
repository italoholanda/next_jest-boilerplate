import * as Styled from './style'

const Main = () => {
  return (
    <Styled.Main>
      <div className="brand">
        <img src="/img/logo.svg" alt="Next Boilerplate" />
        <h1>Next Boilerplate</h1>
        <p>an advanced setup to start building</p>
      </div>
      <div className="features">
        <h2>working with</h2>
        <ul>
          <li>TypeScript</li>
          <li>ESLint</li>
          <li>Jest</li>
          <li>Testing Library</li>
          <li>NextJS</li>
          <li>React</li>
          <li>Husky</li>
          <li>Prettier</li>
          <li>Styled Components</li>
          <li>Lint Staged</li>
        </ul>
      </div>
    </Styled.Main>
  )
}

export default Main
