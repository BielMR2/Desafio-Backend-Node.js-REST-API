class UserRepositoryInMemory {
    users = []

    async create({ email, name, password }){
        const user = {
            id: Math.floor(Math.random() * 1000) + 1,
            email,
            name,
            password
        }

        this.users.push(user)
        return user
    }

    async find(data, type){
        const user = this.users.find(user => user[type] === data)
        if(!user){
            return null
        }
        return user
    }

    async delete(id){
        const user = this.users.find(user => user !== id)
        return user
    }

    async index(){
        if(this.users.length === 0){
            return null
        }
        return this.users
    }

    async show({ id, email, name, role }) {
        const filteredUsers = this.users.filter(user => {
            return (!id || user.id === id) &&
                   (!email || user.email.includes(email)) &&
                   (!name || user.name.includes(name)) &&
                   (!role || user.role.includes(role));
        });
    
        if (filteredUsers.length === 0) {
            return null;
        }
    
        return filteredUsers;
    }

    async update({ id, user }){
        const userToUpdate = this.users.find(user => user.id === id)
        Object.assign(userToUpdate, user);
        return userToUpdate;
    }

}

module.exports = UserRepositoryInMemory