import axios from '../../custom-axios/axios'

const AdministratorRepository = {

    approveReservation: (id)=> {
        return axios.post(`/api/administrator/approve/${id}`);

    },
    getAllAdminEmails:()=>{
        return axios.get("/api/administrator/adminemails");
    },
    loginAdministrator: (login)=>{
        return axios.post("/api/administrator/adminlogin",login);
    }


}
export default AdministratorRepository;