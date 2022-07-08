import db from '../db';
import User from "../models/user.model";

class UserRepository {
    async findAllUsers(): Promise<User[]> {
        const query = `
            Select uuid,username 
            from application_user
        `;
        const result = await db.query<User>(query);
        const rows = result.rows;
        return rows || [];
    }
}

export default new UserRepository();