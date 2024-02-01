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
        await knex("tasks").where({ id }).del()
    }

    async index(id){
        try {
            const tasks = await knex("tasks")
            .where(builder => {
                if(id) builder.where({ user_id: id })
            })
            .orderBy("priority", "desc")
            .select()
    
            if(tasks.length === 0){
                return null
            }
            return tasks
        } catch (error) {
            console.log(error)
        }
    }


    async show({ user_id, task_id, title, priority, completed }){
        const tasks = await knex("tasks")
            .where(builder => {
                if(user_id) builder.where({ user_id })
                if (task_id) builder.whereLike({ id: task_id });
                if (title) builder.whereLike("title", `%${title}%`);
                if (priority) builder.whereLike("priority", `%${priority}%`);
                if (completed) builder.whereLike("completed", `%${completed}%`);
            })
            .orderBy("user_id")
            .select();

        if(tasks.length === 0){
            return null
        }

        return tasks;
    }

    async update({ task }){
        const taskUpdate = await knex("tasks").where({ id: task.id }).update({
            title: task.title,
            priority: task.priority,
            completed: task.completed
        })
        return taskUpdate
    }
}




module.exports = TaskRepository