/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Pet = {
    id: string;
    name: string;
    tag?: string;
    type?: Pet.type;
    start_date?: string;
}

export namespace Pet {

    export enum type {
        ASC = 'asc',
        DESC = 'desc',
    }


}
