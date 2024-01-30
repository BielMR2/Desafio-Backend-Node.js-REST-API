class UsersController {
    async create(req, res){
        const { name, email, password, confirmPassword } = req.body

        res.json({ name, email, password })
    }

    async index(req, res){
        const { name, email, password, confirmPassword } = req.body

        res.json({ name, email, password })
    }

    async show(req, res){
        const { name, email, password, confirmPassword } = req.body

        res.json({ name, email, password })
    }

    async update(req, res){
        const { name, email, password, confirmPassword } = req.body

        res.json({ name, email, password })
    }

    async delete(req, res){
        const { name, email, password, confirmPassword } = req.body

        res.json({ name, email, password })
    }
}

module.exports = UsersController