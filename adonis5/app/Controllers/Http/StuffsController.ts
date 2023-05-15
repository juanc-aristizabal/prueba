import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Stuff from 'App/Models/Stuff'

export default class StuffsController {


  public async index({response}: HttpContextContract) {
    try{
        const stuff = await Stuff.all()
        response.ok(stuff)
     }catch(e){
        response.badRequest()
     } 
  }

//public async create({}: HttpContextContract) {}

public async store({response , request}: HttpContextContract) {

  const data  = await request.all()
 try{
    const stuff = await Database.insertQuery().table('stuff').insert(data)
    response.ok(data)
 }catch(e){
    response.ok(e.detail)
 }

}

public async show({response , params}: HttpContextContract) {

    const stuff = await Database.from('stuff').where('id',params.id).firstOrFail()
    return response.json(stuff);

}

//  public async edit({}: HttpContextContract) {}

  public async update({ request,response,params}: HttpContextContract) {
    
     const data  = request.all()
     try{
     const stuff = await Database.from('stuff').where('id',params.id).update({
                                                                               name:data.name,
                                                                               state:data.state,
                                                                               quantity:data.quantity
                                                                             })
       response.ok('ok right')

      }catch(e){
        response.ok(e.detail)
     }
     
  }

  public async destroy({response, params}: HttpContextContract) {
    
    const kill = await Database.from('stuff').where('id', params.id).delete()
    if(kill){
      response.ok('registro eliminado correctamente...')
    }else{
      response.badRequest('no fue posible eliminar registro...')
    } 
    
  }

  public async getall({ response }: HttpContextContract) {
    const stuff = await Database.from('stuff').select('*')
    return response.json(stuff)
  }



}



//node ace list:routes 