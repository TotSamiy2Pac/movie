export interface actionType {
    type: string;
    payload: any[]
}


export interface discoverActionType {
    type:string;
    payload: {
        idPrice:string | number,
        genre:{
            id: number | string,
            name: string,
        },
        rating: string | number,
        year: string | number,
        page: number
    }
}



interface GET_GENRE_TYPE {
    type:string,
    payload: {
        id: number | string,
        name: string
    }
}
interface GET_RATING_TYPE {
    type:string,
    payload: string | number
}
interface GET_YEARS_TYPE {
    type:string,
    payload: string | number
}
interface ID_PRICE_TYPE {
    type:string,
    payload: string | number
}
interface PAGE_TYPE {
    type:string,
    payload: number
}


export interface discoverState {
    idPrice:string | number,
    genre:{
        id: number | string,
        name: string,
    },
    rating: string | number,
    year: string | number,
    page: number
}

export type discoverType = PAGE_TYPE | ID_PRICE_TYPE | GET_YEARS_TYPE | GET_RATING_TYPE | GET_GENRE_TYPE