type Nullable<T> = T | null ;
export interface Pasaporte {
    id?: Nullable<number>,
    fullname: string,
    address: string,
    birthdate: string,
    documentId: number,
    applicationDate: string,
    appointmentDate?: Nullable<string>,
    amount?: Nullable<number>,
}