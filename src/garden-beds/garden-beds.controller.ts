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
import { GardenBedsService } from './garden-beds.service';
import { CreateGardenBedDto } from './dto/create-garden-bed.dto';
import { UpdateGardenBedDto } from './dto/update-garden-bed.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { GardenBed } from './domain/garden-bed';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllGardenBedsDto } from './dto/find-all-garden-beds.dto';

@ApiTags('Gardenbeds')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'garden-beds',
  version: '1',
})
export class GardenBedsController {
  constructor(private readonly gardenBedsService: GardenBedsService) {}

  @Post()
  @ApiCreatedResponse({
    type: GardenBed,
  })
  create(@Body() createGardenBedDto: CreateGardenBedDto) {
    return this.gardenBedsService.create(createGardenBedDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(GardenBed),
  })
  async findAll(
    @Query() query: FindAllGardenBedsDto,
  ): Promise<InfinityPaginationResponseDto<GardenBed>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.gardenBedsService.findAllWithPagination({
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
    type: GardenBed,
  })
  findById(@Param('id') id: string) {
    return this.gardenBedsService.findById(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: GardenBed,
  })
  update(
    @Param('id') id: string,
    @Body() updateGardenBedDto: UpdateGardenBedDto,
  ) {
    return this.gardenBedsService.update(id, updateGardenBedDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.gardenBedsService.remove(id);
  }
}
