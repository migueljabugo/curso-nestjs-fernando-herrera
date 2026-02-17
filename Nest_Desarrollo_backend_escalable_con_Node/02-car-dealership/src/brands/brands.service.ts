import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private Brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createAt: new Date().getTime(),
      updateAt: new Date().getTime(),
    }
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createAt: new Date().getTime(),
    };
    
    this.Brands.push(brand);

    return brand;
  }

  findAll() {
    return this.Brands;
  }

  findOne(id: string) {
    const brand = this.Brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id "${id}" not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.Brands = this.Brands.map(brand => {
      if (brand.id === id) {
        brandDB.updateAt = new Date().getTime();
        brandDB = { 
          ...brandDB, 
          ...updateBrandDto,
        };
        return brandDB;
      }
      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    this.Brands = this.Brands.filter(brand => brand.id !== id);
  }
}
