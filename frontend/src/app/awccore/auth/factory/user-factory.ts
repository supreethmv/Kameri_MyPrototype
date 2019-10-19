import { User } from '../models/user';
import { UserRaw } from './raw/user-raw';

export class UserFactory {
    static fromRaw(b: UserRaw): User {
        return {
            ...b
        };
    }
}