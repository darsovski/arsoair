import axios from '../../custom-axios/axios'

const FlightRepository = {

    fetchAllFlights: ()=> {
        return axios.get("/api/flights/showAllFlights");
    }
}
export default FlightRepository;