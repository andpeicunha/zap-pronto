import { LoginNavBar } from '@/app/main/dashboard/loginTopBar'
import { fireEvent, render, screen } from '@testing-library/react'
import { signIn, signOut, useSession } from 'next-auth/react'

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
  signOut: jest.fn(),
  useSession: jest.fn(),
}))

xdescribe('LoginNavBar', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the login button when there is no session', async () => {
    ;(useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'success',
    })

    render(<LoginNavBar />)

    const loginButton = screen.getByRole('button', { name: /começar agora/i })
    expect(loginButton).toBeInTheDocument()
  })

  it('should render the user avatar and dropdown menu when there is a session', () => {
    const session = {
      user: {
        name: 'John Doe',
        image: 'https://example.com/avatar.jpg',
      },
    }
    ;(useSession as jest.Mock).mockReturnValue({
      data: session,
      status: 'success',
    })

    render(<LoginNavBar />)

    const userName = screen.getByText('John Doe')
    expect(userName).toBeInTheDocument()

    const dropdownMenu = screen.getByRole('button', { name: /john doe/i })
    fireEvent.click(dropdownMenu)

    const myAccountMenuItem = screen.getByText('Minha Conta')
    expect(myAccountMenuItem).toBeInTheDocument()

    const profileMenuItem = screen.getByText('Perfil')
    expect(profileMenuItem).toBeInTheDocument()

    const paymentMenuItem = screen.getByText('Pagamento')
    expect(paymentMenuItem).toBeInTheDocument()

    const settingsMenuItem = screen.getByText('Configurações')
    expect(settingsMenuItem).toBeInTheDocument()

    const signOutMenuItem = screen.getByText('Sair')
    expect(signOutMenuItem).toBeInTheDocument()
  })

  it('should call the signIn function when the login button is clicked', () => {
    ;(useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'success',
    })

    render(<LoginNavBar />)

    const loginButton = screen.getByRole('button', { name: /começar agora/i })
    fireEvent.click(loginButton)

    expect(signIn).toHaveBeenCalledTimes(1)
  })

  it('should call the signOut function when the "Sair" menu item is clicked', () => {
    const session = {
      user: {
        name: 'John Doe',
        image: 'https://example.com/avatar.jpg',
      },
    }
    ;(useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'success',
    })

    render(<LoginNavBar />)

    const dropdownMenu = screen.getByRole('button', { name: /john doe/i })
    fireEvent.click(dropdownMenu)

    const signOutMenuItem = screen.getByText('Sair')
    fireEvent.click(signOutMenuItem)

    expect(signOut).toHaveBeenCalledTimes(1)
  })
})
