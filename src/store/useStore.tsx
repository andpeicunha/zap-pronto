import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type ModalState = {
	[key: string]: boolean
}

type State = {
	modals: ModalState
	isModalVisible: boolean
	toggleModal: (id: string) => void
	currentPage: number
	phoneNumber: number
}

type Action = {
	updateCurrentPage: (currentPage: State['currentPage']) => void
}

const initialState = {
	modals: {}, // Inicializa o estado de modais como um objeto vazio
	isModalVisible: false,
	currentPage: 1,
	phoneNumber: 0,
}

export const useStore = create<State & Action>()(
	devtools((set) => ({
		...initialState,
		toggleModal: (id: string) =>
			set((state) => ({
				modals: {
					...state.modals,
					[id]: !state.modals[id], // Alterna o estado do modal especificado pelo ID
				},
			})),
		isModalVisible: false,
		phoneNumber: 0,
		updateCurrentPage: (currentPage) =>
			set(() => ({ currentPage: currentPage })),
		reset: () => set(initialState),
	})),
)
