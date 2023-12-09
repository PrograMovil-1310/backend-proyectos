import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {InventarioQuickscan} from '../models';
import {InventarioQuickscanRepository} from '../repositories';

export class InventarioQuickScanController {
  constructor(
    @repository(InventarioQuickscanRepository)
    public inventarioQuickscanRepository : InventarioQuickscanRepository,
  ) {}

  @post('/inventario-quickscans')
  @response(200, {
    description: 'InventarioQuickscan model instance',
    content: {'application/json': {schema: getModelSchemaRef(InventarioQuickscan)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InventarioQuickscan, {
            title: 'NewInventarioQuickscan',
            
          }),
        },
      },
    })
    inventarioQuickscan: InventarioQuickscan,
  ): Promise<InventarioQuickscan> {
    return this.inventarioQuickscanRepository.create(inventarioQuickscan);
  }

  @get('/inventario-quickscans/count')
  @response(200, {
    description: 'InventarioQuickscan model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InventarioQuickscan) where?: Where<InventarioQuickscan>,
  ): Promise<Count> {
    return this.inventarioQuickscanRepository.count(where);
  }

  @get('/inventario-quickscans')
  @response(200, {
    description: 'Array of InventarioQuickscan model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InventarioQuickscan, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InventarioQuickscan) filter?: Filter<InventarioQuickscan>,
  ): Promise<InventarioQuickscan[]> {
    return this.inventarioQuickscanRepository.find(filter);
  }

  @patch('/inventario-quickscans')
  @response(200, {
    description: 'InventarioQuickscan PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InventarioQuickscan, {partial: true}),
        },
      },
    })
    inventarioQuickscan: InventarioQuickscan,
    @param.where(InventarioQuickscan) where?: Where<InventarioQuickscan>,
  ): Promise<Count> {
    return this.inventarioQuickscanRepository.updateAll(inventarioQuickscan, where);
  }

  @get('/inventario-quickscans/{id}')
  @response(200, {
    description: 'InventarioQuickscan model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InventarioQuickscan, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(InventarioQuickscan, {exclude: 'where'}) filter?: FilterExcludingWhere<InventarioQuickscan>
  ): Promise<InventarioQuickscan> {
    return this.inventarioQuickscanRepository.findById(id, filter);
  }

  @patch('/inventario-quickscans/{id}')
  @response(204, {
    description: 'InventarioQuickscan PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InventarioQuickscan, {partial: true}),
        },
      },
    })
    inventarioQuickscan: InventarioQuickscan,
  ): Promise<void> {
    await this.inventarioQuickscanRepository.updateById(id, inventarioQuickscan);
  }

  @put('/inventario-quickscans/{id}')
  @response(204, {
    description: 'InventarioQuickscan PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() inventarioQuickscan: InventarioQuickscan,
  ): Promise<void> {
    await this.inventarioQuickscanRepository.replaceById(id, inventarioQuickscan);
  }

  @del('/inventario-quickscans/{id}')
  @response(204, {
    description: 'InventarioQuickscan DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.inventarioQuickscanRepository.deleteById(id);
  }
}
