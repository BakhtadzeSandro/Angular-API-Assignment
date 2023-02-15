export interface Country {
    flags: {
        png: string,
    }
    currencies: Currency
}

export interface Currency{
    currencyName:{
        name: string,
        symbol: string
    }
}

export interface FinalAPI {
    actorNames: string[],
    movieTitle: string,
    year: string,
    countries: Country;
}