import { expect, test, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Sidebar } from "@/app/components/sidebar";

describe("Menu Sidebar", () => {
  it("carregou logotipo", () => {
    render(<Sidebar />);
    expect(screen.getAllByTestId("logotipo")).toBeDefined();
  });
  it("carregou menu", () => {
    expect(screen.getByText(/Início/i)).toBeDefined();
    expect(screen.getByText(/Clientes/i)).toBeDefined();
    expect(screen.getByText(/Mensagens/i)).toBeDefined();
    expect(screen.getByText(/Configurações/i)).toBeDefined();
    expect(screen.getByText(/Suporte/i)).toBeDefined();
  });
});
