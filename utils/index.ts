import { FilterProps } from './../types/index';
import { CarProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturers, year, limit, model, fuel } = filters
    const headers = {
        "X-RapidAPI-Key": "5d2ffac842msh05711a89cf1c2fap1e5263jsnce469433212e",
        "X_RapidAPI-Host": 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturers}&year=${year}&model=${model}&limit=${limit}&=${limit}&fuel_type=${fuel}`, { headers: headers })

    const result = await response.json()

    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = async (car: CarProps): Promise<string> => {

    const { make, model, year } = car;
    const apiKey = '45337631-8c93db199cc1fba26ef4ca353';

    try {
        const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${make}${year}${model}`);
        const data = await response.json();
        if (data.hits && data.hits.length > 0) {
            return data.hits[1].webformatURL;
        } else {
            throw new Error('Nenhuma imagem encontrada para esse carro.');
        }
    } catch (error) {
        console.error('Erro ao buscar imagem:', error);
        return 'URL_DA_IMAGEM_PADRAO';
    }
}

export const updateSearchparams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    return newPathName
}