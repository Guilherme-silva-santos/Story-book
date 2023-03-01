import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray700',
  height: '$4',
})

export function App() {
  return <Button>DSend</Button>
}
