import usersModel from '../models/Users.js';

export default class UsersDAO{
    async findAllUsers(){
        const users = await usersModel.find()
        return users;
    }

    async createOneUser(user){
        const newUser = new usersModel(user);
        await newUser.save();
        return newUser;
    }

    async deleteOneUser(id){
        const user = await usersModel.findByIdAndDelete(id);
        return user;
    }

    async updateOneUser(id, user){
        const updatedUser = await usersModel.findByIdAndUpdate(id, user,{new: true});
        return updatedUser;
    }
}