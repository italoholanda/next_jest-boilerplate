import Button from 'components/Button'
import * as Styled from './style'

const Header = () => {
  return (
    <Styled.Header>
      <div className="container">
        <img src="/img/logo-text.svg" alt="test" />
        <ul>
          <li>
            <Button imgUrl="/img/source.svg" text="source" />
          </li>
          <li>
            <Button imgUrl="/img/clone.svg" text="clone" />
          </li>
        </ul>
      </div>
    </Styled.Header>
  )
}

export default Header
