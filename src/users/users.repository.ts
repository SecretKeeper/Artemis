import { Injectable, OnModuleInit } from '@nestjs/common';
import { mapping } from 'cassandra-driver';
import { CassandraService } from '../cassandra/cassandra.service';

type User = any;
@Injectable()
export class UsersRepository implements OnModuleInit {
  constructor(private cassandraService: CassandraService) {}

  usersMapper: mapping.ModelMapper<User>;

  onModuleInit() {
    const mappingOptions: mapping.MappingOptions = {
      models: {
        Employee: {
          tables: ['employee'],
          mappings: new mapping.UnderscoreCqlToCamelCaseMappings(),
        },
      },
    };

    this.usersMapper = this.cassandraService
      .createMapper(mappingOptions)
      .forModel('user');
  }

  async getUsers() {
    return (await this.usersMapper.findAll()).toArray();
  }

  async register(user: User) {
    return await this.usersMapper.insert(user);
  }

  async login(user: User) {
    return await this.usersMapper.find({
      id: 'b77d2725-1bfd-4859-870c-dbaa0f8ef0f7',
    });
  }
}
