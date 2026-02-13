import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuItem } from 'src/entities/menu-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuItemService {
  constructor(
    @InjectRepository(MenuItem)
    private readonly menuItemRepository: Repository<MenuItem>,
  ) {}
  async create(createMenuItemDto: CreateMenuItemDto) {
    const response = await this.menuItemRepository.save(createMenuItemDto);
    return response;
  }

  async findAll(
    page: number = 1,
    itemsPerPage: number = 5,
    categoryId?: number,
  ) {
    const response = await this.menuItemRepository.find({
      relations: {
        category: true,
      },
      take: itemsPerPage,
      skip: (page - 1) * itemsPerPage,
      where: { category: { id: categoryId } },
      cache: 600000,
    });
    return response;
  }

  async getMenu(limit: number = 10, offset: number = 0) {
    return await this.menuItemRepository
      .createQueryBuilder('menu')
      .leftJoinAndSelect('menu.category', 'category')
      .leftJoin('menu.tags', 'tag')
      .groupBy('menu.id, category.id')
      .orderBy('category.id')
      .addOrderBy('menu.id')
      .limit(limit)
      .offset(offset)
      .getMany();
  }

  async findOne(id: number) {
    const response = await this.menuItemRepository.findOne({ where: { id } });
    if (!response) {
      throw new NotFoundException(`No menu item with id = ${id}`);
    }
    return response;
  }

  async update(id: number, updateMenuItemDto: UpdateMenuItemDto) {
    await this.menuItemRepository.update(id, updateMenuItemDto);
    return updateMenuItemDto;
  }

  async remove(id: number) {
    await this.menuItemRepository.delete({ id: id });
    return id;
  }
}
