import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuItem } from 'src/entities/menu-item.entity';
import { Repository } from 'typeorm';
import { GetMenuItemDto } from './dto/get-menu-item.dto';

@Injectable()
export class MenuItemService {
  constructor(
    @InjectRepository(MenuItem)
    private readonly menuItemRepository: Repository<MenuItem>,
  ) {}
  async create(createMenuItemDto: CreateMenuItemDto) {
    const response = await this.menuItemRepository.save(
      this.toEntity(createMenuItemDto),
    );
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
      order: { category: { name: 'ASC' } },
    });
    return response.map((item) => this.toDto(item));
  }

  async findOne(id: number) {
    const response = await this.menuItemRepository.findOne({ where: { id } });
    if (!response) {
      throw new NotFoundException(`No menu item with id = ${id}`);
    }
    return this.toDto(response);
  }

  async update(id: number, updateMenuItemDto: UpdateMenuItemDto) {
    await this.menuItemRepository.update(id, updateMenuItemDto);
    return updateMenuItemDto;
  }

  async remove(id: number) {
    await this.menuItemRepository.delete({ id: id });
    return id;
  }

  toDto(menuItem: MenuItem): GetMenuItemDto {
    return {
      id: menuItem.id,
      name: menuItem.name,
      description: menuItem.description,
      slug: menuItem.slug,
      price: menuItem.price,
      weight: menuItem.weight,
      nutritions: {
        calories: menuItem.calories,
        proteins: menuItem.proteins,
        fats: menuItem.fats,
        carbs: menuItem.carbs,
      },
      category: menuItem.category,
      tags: menuItem.tags,
    };
  }

  toEntity(createMenuItemDto: CreateMenuItemDto) {
    return {
      name: createMenuItemDto.name,
      description: createMenuItemDto.description,
      slug: createMenuItemDto.slug,
      price: createMenuItemDto.price,
      image: createMenuItemDto.image,
      weight: createMenuItemDto.weight,
      calories: createMenuItemDto.nutritions?.calories,
      proteins: createMenuItemDto.nutritions?.proteins,
      fats: createMenuItemDto.nutritions?.fats,
      carbs: createMenuItemDto.nutritions?.carbs,
      category: createMenuItemDto.category,
      tags: createMenuItemDto.tags,
    };
  }
}
