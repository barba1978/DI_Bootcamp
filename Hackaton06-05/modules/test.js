const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : 'Newbank2020',
    database : 'fitnesTests'
  }
});


const getAllTests=()=>{
return knex('tests')
.select('benchmark','note','basic_score','advanced_score','expert_score','elite_score','phisical_ability')

}

const searchTest=(name)=>{
  return knex('tests')
  .select('benchmark','note','basic_score','advanced_score','expert_score','elite_score','phisical_ability')
  .whereILike('benchmark',`${name}%`)

}

const createTest=(test)=>{
return knex('tests')
.insert(test)
//


}

module.exports={getAllTests,searchTest,createTest}
