import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
        "X-RapidAPI-Key": "5d2ffac842msh05711a89cf1c2fap1e5263jsnce469433212e",
        "X_RapidAPI-Host": 'cars-by-api-ninjas.p.rapidapi.com'
    }

<<<<<<< HEAD
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', { headers: headers })
=======
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', { headers: headers })
>>>>>>> a35407f150a9a6722551c64cb1a05b4b362894fc

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

<<<<<<< HEAD
export const generateCarImageUrl = async (car: CarProps): Promise<string> => {

    const { make, model, year } = car;
    const apiKey = '45337631-8c93db199cc1fba26ef4ca353';

    try {
        const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${make}${year}${model}`);
        const data = await response.json();
        if (data.hits && data.hits.length > 0) {
            console.log(data.hits[0].webformatURL)
            return data.hits[1].webformatURL;
        } else {
            throw new Error('Nenhuma imagem encontrada para esse carro.');
        }
    } catch (error) {
        console.error('Erro ao buscar imagem:', error);
        return 'URL_DA_IMAGEM_PADRAO';
    }
=======
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage")

    const { make, year, model } = car

    url.searchParams.append("customer", "hrjavascript-mastery")
    url.searchParams.append("make", make)
    url.searchParams.append("modelFamily", model.split(" ")[0])
    url.searchParams.append("zoomType", 'fullscreen')
    url.searchParams.append("modelYear", `${year}`)
    url.searchParams.append("angle", `${angle}`)

    return `${url}`
>>>>>>> a35407f150a9a6722551c64cb1a05b4b362894fc
}
