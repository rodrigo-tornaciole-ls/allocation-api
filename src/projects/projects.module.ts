import { Module } from '@nestjs/common';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './entity/project.entity';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  imports:[MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema}])],
  controllers: [ProjectsController],
  providers: [
    ProjectsService,
    {
      provide: getModelToken(Project.name),
      useValue: 'projectModel'
    }
  ]
})
export class ProjectsModule {}
