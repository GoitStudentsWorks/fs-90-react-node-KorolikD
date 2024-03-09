import 'modern-normalize/modern-normalize.css';
import {  Title, Paragraph, InfoContainer, Button} from './ErrorPage.styled.js';
import Logo404 from '../../components/Logo/404Logo.jsx';
import ResponsiveBackground from '../../components/ResponsiveBackground';
import Container from '../../components/Container/Container.jsx';


const ErrorPage = () => {

 
  return (
    <Container>
 
      <InfoContainer>
      <Logo404/>
     <Title>404</Title>
      <Paragraph>Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience.</Paragraph>
      <Button to='/'>Go Home</Button>
      </InfoContainer>
      <ResponsiveBackground />
      
    

    </Container>
  );
};

export default ErrorPage;
