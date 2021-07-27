/*
    @jest-environment ./prisma/prisma-environment-jest
*/

import { app } from "../../app";
import request from 'supertest';

describe("Create User Controller", () => {
    it("should be able to create a new user", async () => {
        const response = await request(app).post('/users').send({
            username: 'test-integration',
            email: 'testIntegration@test.com.br',
            name: 'Test Integration'
        });

        console.log(response.body);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
    });
});