const knex = require("../database")

class TaskRepository {
    async find(date, type){
        const task = await knex("tasks").where({ [type]: date }).first()
        if(!task){
            return null
        }
        return task
    }

    async create({ id, outherUser, title, priority, completed }){
        const taskId = await knex("tasks").insert({ title, priority, completed, user_id: id || outherUser })
        return taskId
    }

    async delete(id){
        try {
            await knex("tasks").where({ id }).del()
        } catch (error) {
            console.error("Erro ao excluir pedido", error)
            throw error
        }
    }
}




module.exports = TaskRepository