import UsersDAO from '../persistencia/dao/usersDao.js'

export default class UsersService{
    constructor(){
        this.userDao = new UsersDAO();
    }

    async getAll(){
        return this.userDao.findAllUsers();
    }

    async createUser(user){
        return this.userDao.createOneUser(user);
    }

    async deleteUser(id){
        return this.userDao.deleteOneUser(id);
    }

    async updateUser(id, user){
        return this.userDao.updateOneUser(id, user);
    }
}