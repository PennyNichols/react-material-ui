import ResponsiveAppBar from './components/mui-comp/ResponsiveAppBar';
import Button from './components/styled-comp/Button';
import Container from './components/styled-comp/Container';
import Header from './components/styled-comp/Header';
import Link from './components/styled-comp/Link';

function App() {
  return (
    <>
      <Container>
        <Header>Hello World</Header>
        <Button>Click Me!</Button>
        <Link>This is a link</Link>
      </Container>
      <ResponsiveAppBar/>
    </>
  );
}

export default App;