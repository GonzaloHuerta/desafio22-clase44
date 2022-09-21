export const typeDefs = `
    type Query{
        getAllProducts:[Product]
        getAllUsers:[User]
    }

    type Mutation{
        addProduct(input:ProductInput):Product
        deleteProduct(id:ID):Product
        updateProduct(id:ID, input:ProductInput):Product
        addUser(input:UserInput):User
        deleteUser(id:ID):User
        updateUser(id:ID, input:UserInput):Product
    }

    type Product{
        id:ID,
        name:String,
        price:Int,
        stock:Int
    }

    input ProductInput{
        name:String,
        price:Int,
        stock:Int
    }

    type User{
        id:ID,
        email:String,
        name:String,
        surname:String,
        age:Int
    }

    input UserInput{
        email:String,
        name:String,
        surname:String,
        age:Int
    }

`