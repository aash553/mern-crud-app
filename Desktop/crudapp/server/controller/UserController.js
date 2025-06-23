import User from '../models/userModel.js'


export const create = async(req,res)=>{
    try {

        const userData = new User(req.body)

        if(!userData){
            return res.status(404).json({msg: " User data not found "})
        }

        const savedata = await userData.save()
        res.status(200).json(savedata)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getAll = async(req,res)=>{
    try {
        const userData = await User.find();
        if(!userData){
            return res.status(404).json({msg: " User data not found "})
        }
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getOne = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg: " User data not found "})
        }
        res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const update = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg: " User data not found "})
        }

        const updatedata = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({msg:"User Updated Successfully"});

    } catch (error) {
         res.status(500).json({error:error})
    }
}


export const userdelete = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"user not found "});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"user deleted successfully"})
    } catch (error) {
        res.status(500).json({error:error})
    }
}