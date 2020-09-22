import { withTheme } from 'styled-components';
import styled from 'styled-components'
import theme from './theme' // from Step #3

const Header = styled.div`
  background: black;
  font-size: ${theme.mobile};
`

const Button = styled.button`
  padding: 10px;
  
`
class MyComponent extends React.Component {
  render() {
    return (
    <>
    <Header>张明雪</Header>
    <Button>aaaaaaaaaaaaaaaaaaaaaa</Button>
    </>
    )

  }
}

export default (MyComponent);
