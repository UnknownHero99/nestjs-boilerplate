import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { GardensService } from './gardens.service';
import { CreateGardenDto } from './dto/create-garden.dto';
import { UpdateGardenDto } from './dto/update-garden.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Garden } from './domain/garden';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllGardensDto } from './dto/find-all-gardens.dto';

@ApiTags('Gardens')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'gardens',
  version: '1',
})
export class GardensController {
  constructor(private readonly gardensService: GardensService) {}

  @Post()
  @ApiCreatedResponse({
    type: Garden,
  })
  create(@Body() createGardenDto: CreateGardenDto) {
    return this.gardensService.create(createGardenDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Garden),
  })
  async findAll(
    @Query() query: FindAllGardensDto,
  ): Promise<InfinityPaginationResponseDto<Garden>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.gardensService.findAllWithPagination({
        paginationOptions: {
          page,
          limit,
        },
      }),
      { page, limit },
    );
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Garden,
  })
  findById(@Param('id') id: string) {
    return this.gardensService.findById(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Garden,
  })
  update(@Param('id') id: string, @Body() updateGardenDto: UpdateGardenDto) {
    return this.gardensService.update(id, updateGardenDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.gardensService.remove(id);
  }
}
