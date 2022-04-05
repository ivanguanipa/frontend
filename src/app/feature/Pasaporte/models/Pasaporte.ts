type Nullable<T> = T | null ;
export interface Pasaporte {
    id?: Nullable<number>,
    fullname: string,
    address: string,
    birthdate: string,
    document_id: number,
    application_date: string,
    appointment_date?: Nullable<string>,
    amount?: Nullable<number>,
}