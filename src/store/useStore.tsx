import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
  isModalVisible: boolean
  toggleModal: () => void
  currentPage: number
}

type Action = {
  updateCurrentPage: (currentPage: State['currentPage']) => void
}

const initialState = {
  isModalVisible: false,
  currentPage: 1,
}

export const useStore = create<State & Action>()(
  devtools((set) => ({
    ...initialState,
    isModalVisible: false,
    updateCurrentPage: (currentPage) => set(() => ({ currentPage: currentPage })),
    toggleModal: () => set((state) => ({ isModalVisible: !state.isModalVisible })),
    reset: () => set(initialState),
  })),
)
