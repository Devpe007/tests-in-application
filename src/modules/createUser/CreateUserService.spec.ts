import { User } from "../../entities/User";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserService } from "./CreateUserService";

describe("Create User", () => {
    it("should be able to create a new user", async () => {
        const usersRepository = new UsersRepositoryInMemory();
        const createUserService = new CreateUserService(usersRepository);

        const userData: User = {
            name: 'Test Name',
            email: 'teste@teste.com',
            username: 'testusername',
        };

        const user = await createUserService.execute(userData);

        console.log(user);

        expect(user).toHaveProperty('id');
        expect(user.username).toBe('testusername');
    })
});