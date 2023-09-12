const UserService = require("../services/user.service");
const UserController = require("./user.controller");

class UserExpressController extends UserController {
    constructor() {
        super()
    }
    async registration(req, res) {
        try {
            const bodyJson = req.body;
            // call service registrasi.
            const userService = new UserService()
            const registrasi = await userService.registration(bodyJson);

            res.status(201).json({ message: registrasi, status: "success", code: 201 });
        } catch (error) {
            res.status(400).json({ message: error.message, status: "fail", code: 400 });
            // throw error;
        }
    }
}

module.exports = UserExpressController;