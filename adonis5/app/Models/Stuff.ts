import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Stuff extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  public name:string
  @column()
  public state:string
  @column()
  public quantity:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
