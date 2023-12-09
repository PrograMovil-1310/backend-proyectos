import {Entity, model, property} from '@loopback/repository';

@model()
export class Nota extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  titulo?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;


  constructor(data?: Partial<Nota>) {
    super(data);
  }
}

export interface NotaRelations {
  // describe navigational properties here
}

export type NotaWithRelations = Nota & NotaRelations;
