import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from  '../src/projects/entity/project.entity';
import { ProjectsModule } from '../src/projects/projects.module';
import { ProjectsService } from '../src/projects/projects.service';
import { ProjectsController } from '../src/projects/projects.controller';
import { createProjectMockRequest, updateProjectMockResponse } from './mock/projects.mock';

describe('ProjectController (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost/allocation'),
        MongooseModule.forFeature([{name: Project.name, schema: ProjectSchema}]),
        ProjectsModule
      ],
      providers: [ProjectsService],
      controllers: [ProjectsController]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    moduleFixture.close();
  });

  it('/projects (CREATE PROJECT)',() => {
    return request(app.getHttpServer())
      .post('/projects')
      .send(createProjectMockRequest)
      .then((result) => {
        expect(result.status).toEqual(201);
        expect(result.body).toHaveProperty('_id');
        expect(result.body).toHaveProperty('name');
        expect(result.body).toHaveProperty('tag');
      })
  })

  it('/projects (GET ALL PROJECTS)', () => {
    return request(app.getHttpServer())
      .get('/projects')
      .then((result) => {
        expect(result.status).toEqual(200);
        expect(result.body[0]).toHaveProperty('_id');
        expect(result.body[0]).toHaveProperty('name');
        expect(result.body[0]).toHaveProperty('tag');
      })
  })

  it('/projects/{projectId} (GET BY PROJECT ID)', () => {
    return request(app.getHttpServer())
      .get(`/projects/${createProjectMockRequest._id}`)
      .then((result) => {
        expect(result.status).toEqual(200);
        expect(result.body).toHaveProperty('_id');
        expect(result.body).toHaveProperty('name');
        expect(result.body).toHaveProperty('tag');
      })
  })

  it('/projects/{projectId} (UPDATE BY PROJECT ID', () => {
    return request(app.getHttpServer())
    .patch(`/projects/${createProjectMockRequest._id}`)
    .send(updateProjectMockResponse)
    .then((result) => {
      expect(result.status).toEqual(200);
      expect(result.body).toHaveProperty('_id');
      expect(result.body).toHaveProperty('name');
      expect(result.body.name).toEqual('Nextly Mock Test');
      expect(result.body).toHaveProperty('tag');
    })
  })

  it('/projects/{projectId} (DELETE BY PROJECT ID', () => {
    return request(app.getHttpServer())
      .delete(`/projects/${createProjectMockRequest._id}`)
      .expect(200)
  })
});
