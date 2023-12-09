import {Entity, model, property} from '@loopback/repository';

@model()
export class InventarioQuickscan extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  Id: number;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  stock?: string;

  @property({
    type: 'date',
  })
  fechaIngreso?: string;


  constructor(data?: Partial<InventarioQuickscan>) {
    super(data);
  }
}

export interface InventarioQuickscanRelations {
  // describe navigational properties here
}

export type InventarioQuickscanWithRelations = InventarioQuickscan & InventarioQuickscanRelations;
