import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosService } from './cursos/cursos.service';
import { CursosController } from './cursos/cursos.controller';
import { CursosModule } from './cursos/cursos.module';
import 'dotenv/config';

@Module({
  imports: [EstudiantesModule,CursosModule,MongooseModule.forRoot(process.env.MONGO_KEY), CursosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
