import UsersService from '../services/users.js';

export default class UsersController{
    constructor(){
        this.userService = new UsersService()
    }

    async getAll(){
        const allUsers= await this.userService.getAll();
        return allUsers;
    }

    async createUser(user){
        const userCreated = await this.userService.createUser(user);
        return userCreated;
    }

    async deleteUser(id){
        const userDeleted = await this.userService.deleteUser(id);
        return userDeleted;
    }

    async updateUser(id, user){
        const userUpdated = await this.userService.updateUser(id, user);
        return userUpdated;
    }
}