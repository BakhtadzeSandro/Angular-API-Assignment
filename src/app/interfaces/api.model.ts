export interface Country {
    flags: {
        png: string,
    }
    currencies: {
        currencyName: {
            name: string,
            symbol: string
        }
    }
}

export interface FinalAPI {
    actorNames: string[],
    movieTitle: string,
    year: string,
    countries: Country;
}