import Home from '@/app/home/home';
import { render } from '@testing-library/react';

xdescribe('Home', () => {
  it('should render the home page correctly', () => {
    const { getByText, getByAltText } = render(<Home />);

    // Assert that the logo is rendered
    const logo = getByAltText('logotipo clientX');
    expect(logo).toBeInTheDocument();

    // Assert that the main heading is rendered
    const mainHeading = getByText('Envie Mensagens, Gerencie e Venda!');
    expect(mainHeading).toBeInTheDocument();

    // Assert that the subheading is rendered
    const subHeading = getByText('Transforme suas comunicações no WhatsApp!');
    expect(subHeading).toBeInTheDocument();

    // Assert that the description text is rendered
    const descriptionText = getByText(
      'Um sistema simples e eficiente que permite enviar mensagens, gerenciar seus contatos e aumentar suas vendas com muita facilidade. Cadastre seu telefone, adicione os contatos, crie sua mensagem e pronto! Agende o envio no melhor horário para você e acompanhe os resultados em tempo real.',
    );
    expect(descriptionText).toBeInTheDocument();

    // Assert that the login navigation bar is rendered
    const loginNavBar = getByText('Login');
    expect(loginNavBar).toBeInTheDocument();
  });
});
