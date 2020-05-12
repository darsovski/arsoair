import axios from '../../custom-axios/axios'

const UserRepository = {

    findUserById: (id)=> {
        return axios.get(`/api/user/finduser/${id}`);
    }

}
export default UserRepository;

