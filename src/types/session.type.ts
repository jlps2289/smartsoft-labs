// Types
import type { User } from '@/types/user.type';

export type Session = {
	token: string;
	user: User;
};

export type P_Login = {
	username: string;
	password: string;
};
