const userModel =require("../models/userModel")

exports.register = async (req, res) => {
const data=req.body
    const { email, password } = req.body
    const user = await userModel.findOne({ email: email })

    if(user) return res.status(400).send({ status: false, message: "Email already present" })
    const creatUser = await userModel.create(data)
        return res.status(201).send({ status: true, message: "User Created Successfully", data: creatUser })
       

 
    
   
}

exports.login = async (req, res) => {
    const data=req.body
    const { email, password } = req.body
    const user = await userModel.findOne({ email: email })
    if (!user) {

        return res.status(404).send({ status: true, message: "User not found", })
    }
    else {
        return res.status(200).send({ status: false, message: "Login succesfully" })
    }
}
