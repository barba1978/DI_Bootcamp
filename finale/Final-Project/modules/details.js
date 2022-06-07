const dotenv = require('dotenv');

dotenv.config();

const knex = require('knex')({
    client: 'pg',
    connection: {
      host :process.env.DB_HOST,
      port :process.env.DB_PORT,
      user :process.env.DB_USER,
      password :process.env.DB_PASSWORD,
      database :process.env.DB_DATABASE
    }
  });


const getAlldetails=()=>{
    return knex('mahon')
    .select('*')
    
    }
    const searchAlldetails=(name)=>{
      return knex('mahon')
      .select('*')
      .whereILike('full_name',`${name}%`)
    
    }

const createDetail=(newElem)=>{
    return knex('mahon')
    .insert(newElem)
    .returning('*')


}

const  deleteDetail=(full_name)=>{
    console.log('bla bla ',full_name.trim());
    return knex('mahon')
    .del()
    .whereLike('full_name',`${full_name}%`)
    .returning('*')
    }


    const updatedetails = (full_name, obj) => {
      
        console.log('log in the details ' + full_name,obj)
        return knex('mahon')
        .update(obj)
        .whereLike('full_name',`${full_name}%`)
        .returning('*')
      }

   


module.exports = {getAlldetails,
    createDetail,deleteDetail,updatedetails,searchAlldetails}