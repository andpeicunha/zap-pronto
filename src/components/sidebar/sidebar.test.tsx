import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Sidebar } from '@/app/components/sidebar/sidebar';

describe('Menu Sidebar', () => {
  beforeEach(() => {
    render(<Sidebar />);
  });

  it('carregou logotipo', () => {
    const logotipo = screen.getByTestId('logotipo');
    expect(logotipo).toBeInTheDocument();
  });
  it('carregou menu', () => {
    expect(screen.getByText(/Início/i)).toBeInTheDocument();
  });
});
