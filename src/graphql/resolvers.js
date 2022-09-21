import ProductsController from '../controllers/products.js';
import UsersController from '../controllers/users.js';

const productsController = new ProductsController();
const usersController = new UsersController();

export const resolvers = {
    Query:{
        getAllProducts: ()=>{
            return productsController.getAll();
        },
        getAllUsers: ()=>{
            return usersController.getAll();
        }
    },
    Mutation:{
        addProduct: async(roots, arg)=>{
            return productsController.createProduct(arg.input);
        },
        deleteProduct: async(roots, arg)=>{
            return productsController.deleteProduct(arg.id);
        },
        updateProduct: async(roots, arg)=>{
            return productsController.updateProduct(arg.id, arg.input);
        },
        addUser: async(roots, arg)=>{
            return usersController.createUser(arg.input);
        },
        deleteUser: async(roots, arg)=>{
            return usersController.deleteUser(arg.id);
        },
        updateUser: async(roots, arg)=>{
            return usersController.updateUser(arg.id, arg.input);
        }
    }  
}