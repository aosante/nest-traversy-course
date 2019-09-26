import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsSrv: ItemsService) { }

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsSrv.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Item {
        return this.itemsSrv.findOne(id);
    }

    @Post()
    async create(@Body() createItemDto: CreateItemDto) {
        this.itemsSrv.create(createItemDto);
        return 'Item successfully created!';
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string): string {
        return `This action udpates item #${id}. Whose name is ${updateItemDto.name}.`;
    }

    @Delete(':id')
    delete(@Param('id') id: string): string {
        return `This action deletes item #${id}`;
    }

}
