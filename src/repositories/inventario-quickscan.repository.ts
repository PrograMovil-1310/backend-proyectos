import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {InventarioQuickscan, InventarioQuickscanRelations} from '../models';

export class InventarioQuickscanRepository extends DefaultCrudRepository<
  InventarioQuickscan,
  typeof InventarioQuickscan.prototype.Id,
  InventarioQuickscanRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(InventarioQuickscan, dataSource);
  }
}
