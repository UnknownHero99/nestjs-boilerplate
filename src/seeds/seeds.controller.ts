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
import { SeedsService } from './seeds.service';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Seed } from './domain/seed';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllSeedsDto } from './dto/find-all-seeds.dto';

@ApiTags('Seeds')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'seeds',
  version: '1',
})
export class SeedsController {
  constructor(private readonly seedsService: SeedsService) {}

  @Post()
  @ApiCreatedResponse({
    type: Seed,
  })
  create(@Body() createSeedDto: CreateSeedDto) {
    return this.seedsService.create(createSeedDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Seed),
  })
  async findAll(
    @Query() query: FindAllSeedsDto,
  ): Promise<InfinityPaginationResponseDto<Seed>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.seedsService.findAllWithPagination({
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
    type: Seed,
  })
  findById(@Param('id') id: string) {
    return this.seedsService.findById(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Seed,
  })
  update(@Param('id') id: string, @Body() updateSeedDto: UpdateSeedDto) {
    return this.seedsService.update(id, updateSeedDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.seedsService.remove(id);
  }
}
