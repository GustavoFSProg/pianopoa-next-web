import { Container, Paragraph } from './style'

function Header() {
  return (
    <Container>
      <Paragraph>
        <span style={{ paddingRight: '20px' }}>Home</span>
        <span style={{ paddingRight: '20px' }}>Valores</span>
        <span style={{ paddingRight: '20px' }}>Aulas</span>
        <span style={{ paddingRight: '20px' }}>Videos</span>
      </Paragraph>
    </Container>
  )
}

export default Header
