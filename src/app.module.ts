// Importar el módulo necesario del framework NestJS
import { Module } from '@nestjs/common';

// Importar el módulo RickAndMortyModule, el controlador RickAndMortyController y el servicio RickAndMortyService
import { RickAndMortyModule } from './rick-and-morty/rick-and-morty.module';
import { RickAndMortyController } from './rick-and-morty/rick-and-morty.controller';
import { RickAndMortyService } from './rick-and-morty/rick-and-morty.service';

// Definir una clase de módulo usando el decorador Module
@Module({
  // Importar y configurar el módulo RickAndMortyModule en este módulo
  imports: [RickAndMortyModule],

  // Especificar los controladores que pertenecen a este módulo (RickAndMortyController)
  controllers: [RickAndMortyController],

  // Especificar los proveedores (servicios) que pertenecen a este módulo (RickAndMortyService)
  providers: [RickAndMortyService],
})
export class AppModule {}
