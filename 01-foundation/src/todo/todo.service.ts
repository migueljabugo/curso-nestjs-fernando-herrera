import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

  private todos: Todo[] = [
    {
      id: 1,
      description: 'Piedra del alma',
      done: false,
    },
    {
      id: 2,
      description: 'Piedra del tiempo',
      done: true,
    },
    {
      id: 3,
      description: 'Piedra del espacio',
      done: false,
    }
  ];



  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo';
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number) {
    const todo = this.todos.find(todo => todo.id === id);

    if (!todo) {
      throw new NotFoundException(`Todo with ${id} not found`);
    }

    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
