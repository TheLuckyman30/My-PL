import { create } from 'zustand';
import { User } from '../utils/interfaces/user';

type UserStore = {
  user: User;
  setUser: (newUser: User) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: { firstName: 'No', lastName: 'Name', selectedTeamId: '' },
  setUser: (newUser: User) => {
    set({ user: newUser });
  },
}));
