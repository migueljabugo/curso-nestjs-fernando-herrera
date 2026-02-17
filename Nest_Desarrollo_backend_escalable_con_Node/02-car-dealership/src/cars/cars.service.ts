import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    //{
    //  id: uuid(),
    //  brand: 'Toyota',
    //  model: 'Corolla',
    //},
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOne(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        //Con el operador spread, se van sustituyendo las propiedades, por eso el orden es Objeto antiguo, objeto recibido y por ultimo el id
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    this.findOne(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
  
    fillCarsWithSeedData(cars: Car[]) {
      this.cars = cars;
    }
}
