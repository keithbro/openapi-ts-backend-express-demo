/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePet } from '../models/CreatePet';
import type { Error } from '../models/Error';
import type { Pet } from '../models/Pet';
import type { Pets } from '../models/Pets';
import { request as __request } from '../core/request';

export class PetsService {

    /**
     * List all pets
     * @param limit How many items to return at one time (max 100)
     * @returns Pets A paged array of pets
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static async listPets(
        limit?: number,
    ): Promise<Pets | Error> {
        const result = await __request({
            method: 'GET',
            path: `/pets`,
            query: {
                'limit': limit,
            },
        });
        return result.body;
    }

    /**
     * Create a pet
     * @param requestBody
     * @returns Error unexpected error
     * @returns any Null response
     * @throws ApiError
     */
    public static async createPets(
        requestBody?: CreatePet,
    ): Promise<Error | any> {
        const result = await __request({
            method: 'POST',
            path: `/pets`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Info for a specific pet
     * @param petId The id of the pet to retrieve
     * @returns Pet Expected response to a valid request
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static async showPetById(
        petId: string,
    ): Promise<Pet | Error> {
        const result = await __request({
            method: 'GET',
            path: `/pets/${petId}`,
        });
        return result.body;
    }

}