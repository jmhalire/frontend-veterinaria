import { User } from './user';

export interface LoginResponse {
    value: boolean;
    message: string;
    token: string;
    user: User
}