import axios from '../../custom-axios/axios'

const ReservationRepository = {

    fetchAllCreatedReservations: ()=> {
        return axios.get("/api/reservation/created");
    }


}
export default ReservationRepository;