// controllers/cadastroController.js
const { where } = require('sequelize');
const Cadastro = require('../model/modelCadastro');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')


const cadastroController = {
  createCadastro: async (req, res) => {
    const { name, email, password,confirmpassword } = req.body;

    if(!name || !email || !password || !confirmpassword){
      res.status(422).json({msg:"prencha todos os campos"})
      }
      if(password !=confirmpassword){
        res.status(422).json({msg:"senhas diferentes"}) 
     }
     const userExists = await Cadastro.findOne({where :{email:email}})
     
     if (userExists) {
      return res.status(400).json({ msg: "Por favor, utilize outro e-mail!" });
    }
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
      
    try {
      const cadastro = await Cadastro.create({
        name: name,
        email: email,
        password: passwordHash,
        
      });
      res.status(201).send(cadastro);
    } catch (error) {
      res.status(500).send("Erro ao criar cadastro");
    }
  },

  createLogin : async (req,res)=>  {
   const  {email,password}=req.body

   if(!email){ 
    return   res.status(422).json({msg:"email vazio"})
    }
     if(!password){
      return  res.status(422).json({msg:"senha vazia"})
    }
    const user= await  Cadastro.findOne({where:{email:email}})

    if(!user){
      return  res.status(404).json({msg:"email nãi encontrado"})
    }
    const  authPassword= await bcrypt.compare(password,user.password)


    if(!authPassword){ 
      return      res.status(422).json({msg:"senha invalida"})
  }



  const admin = "admin@gmail.com"
  const passwordAdmin= "admin"

  const  authAdmin= await bcrypt.compare(passwordAdmin.replace(" "),user.password)
     if(authAdmin &&  admin.replace(" ") == user.email){ 
      return      res.status(422).json({msg:"admin valido"})
  }

  try {
    // const secret = process.env.SECRET;
 
     const token = jwt.sign(
       {
         id: user.id,         
       },
       "bb2ub4iuh67u9y4gufn"   
     );
   const id= user.id
   console.log(id + " achei")
         console.log(token) 
     res.status(200).json({ msg: "Autenticação realizada com sucesso",
      token,
      id
      
     });
   } catch (error) { 
     res.status(500).json({ msg: error });
   } 
     
 },

userValidation: async (req,res)=>{
  const id = req.params.id;

  // check if user exists
  const user = await Cadastro.findByPk(id);

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });
}

};

module.exports = cadastroController;
