import * as Styled from './style'

interface Props {
  imgUrl?: string
  text: string
}

const Button = ({ imgUrl, text }: Props) => {
  return (
    <Styled.Button>
      {imgUrl && <img src={imgUrl} alt={text} />} {text}{' '}
    </Styled.Button>
  )
}

export default Button
