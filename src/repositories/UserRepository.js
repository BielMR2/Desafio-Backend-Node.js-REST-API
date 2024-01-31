const knex = require("../database")

class UserRepository {
    async create({ name, email, password, role }){
        const userId = await knex("users").insert({ name, email, password, role })
        return { id: userId }
    }

    async update({ id, user }){
        const userUpdate = await knex("users").where({ id }).update({
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        })
        return userUpdate
    }
    
    async find(date, type){
        const user = await knex("users").where({ [type]: date }).first()

        if(!user){
            return null
        }
        return user
    }

    async index(){
        const users = await knex("users").select()
        return users
    }

    async show({ id, email, name, role }) {
        const users = await knex("users")
            .where(builder => {
                if (id) builder.whereLike({ id });
                if (email) builder.whereLike("email", `%${email}%`);
                if (name) builder.whereLike("name", `%${name}%`);
                if (role) builder.whereLike("role", `%${role}%`);
            })
            .select();

        if(users.length === 0){
            return null
        }
    
        return users;
    }

    async delete(id){
        try {
            await knex("users").where({ id }).del()
        } catch (error) {
            console.error("Erro ao excluir pedido", error)
            throw error
        }
    }
    
}




module.exports = UserRepository