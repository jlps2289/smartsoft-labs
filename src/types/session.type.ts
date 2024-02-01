// Types
import type { User } from '@/types/user.type';

export type Session = {
	token: string;
	user: User;
};
