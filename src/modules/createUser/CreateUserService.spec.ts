import { User } from "../../entities/User";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../repositories/IUsersRepositories";
import { CreateUserService } from "./CreateUserService";

describe("Create User", () => {
    let usersRepository: IUsersRepository;
    let createUserService: CreateUserService;

    beforeAll(() => {
        usersRepository = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepository);
    });

    it("should be able to create a new user", async () => {
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

    it("should not be able to create an existing user", async () => {
        const userData: User = {
            name: 'Test Existing Name',
            email: 'testeexisting@teste.com',
            username: 'testexisting',
        };

        await createUserService.execute(userData);

        await expect(createUserService.execute(userData)).rejects.toEqual(
            new Error("User already exists!")
        );
    });
});