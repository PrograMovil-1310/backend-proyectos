import {Entity, model, property} from '@loopback/repository';

@model()
export class Producto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  serie?: string;

  @property({
    type: 'date',
  })
  fecha?: string;

  @property({
    type: 'number',
  })
  costo?: number;

  @property({
    type: 'string',
  })
  marca?: string;

  @property({
    type: 'string',
  })
  modelo?: string;

  @property({
    type: 'string',
  })
  sitio?: string;

  @property({
    type: 'string',
  })
  ubicacion?: string;

  @property({
    type: 'string',
  })
  categoria?: string;


  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
