import ProductsDAO from '../persistencia/dao/productsDao.js'

export default class ProductsService{
    constructor(){
        this.productDao = new ProductsDAO();
    }

    async getAll(){
        return this.productDao.findAllProducts();
    }

    async createProduct(prod){
        return this.productDao.createOneProduct(prod);
    }

    async deleteProduct(id){
        return this.productDao.deleteOneProduct(id);
    }

    async updateProduct(id, prod){
        return this.productDao.updateOneProduct(id, prod);
    }
}