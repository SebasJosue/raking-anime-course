import { Module } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeController } from './anime.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [AnimeController], // Lista de controladores
  providers: [AnimeService],      // Lista de servicios
  imports: [PrismaModule]         // Importa otros módulos necesarios
})
export class AnimeModule {}
