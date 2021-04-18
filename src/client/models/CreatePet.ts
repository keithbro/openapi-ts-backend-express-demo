/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePet = {
    name: string;
    tag?: string;
    type?: CreatePet.type;
    start_date?: string;
}

export namespace CreatePet {

    export enum type {
        ASC = 'asc',
        DESC = 'desc',
    }


}
