import { Test, TestingModule } from '@nestjs/testing';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { faker } from '@faker-js/faker';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: NestFastifyApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/auth/register (POST)', () => {
    return app
      .inject({
        method: 'POST',
        url: '/auth/register',
        payload: {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
        },
      })
      .then((result) => {
        expect(result.statusCode).toEqual(201);
        expect(JSON.parse(result.payload)).toHaveProperty('id');
      });
  });

  it('/auth/login (POST)', () => {
    return app
      .inject({
        method: 'POST',
        url: '/auth/login',
        payload: {
          username_or_email: 'julie@gmail.com',
          password: 'secret33',
        },
      })
      .then((result) => {
        expect(result.statusCode).toEqual(201);
        expect(JSON.parse(result.payload)).toHaveProperty('access_token');
      });
  });
});
