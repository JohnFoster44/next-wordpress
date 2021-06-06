import Container from 'components/Container';

const Header = ({ children }) => {
  return (
    <header className="flex justify-center items-center">
      <Container>{children}</Container>
    </header>
  );
};

export default Header;
