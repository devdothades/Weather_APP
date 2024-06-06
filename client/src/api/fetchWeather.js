import axios from "axios"

export const fetchWeather = async (city) => {
    const response = await axios.get(`http://localhost:4000/v1/api/?city=${city}`)

    return response.data
}