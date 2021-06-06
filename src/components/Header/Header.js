import Container from 'components/Container';

const Header = ({ children }) => {
  return (
    <header className="flex justify-center items-center bg-green-100">
      <Container>{children}</Container>
    </header>
  );
};

export default Header;
