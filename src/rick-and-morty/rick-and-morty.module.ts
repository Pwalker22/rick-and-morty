/* eslint-disable prettier/prettier */  // Deshabilitar el formateo de eslint para este archivo

// Importar el módulo necesario del framework NestJS
import { Module } from '@nestjs/common';

// Importar el controlador RickAndMortyController y el servicio RickAndMortyService
import { RickAndMortyController } from './rick-and-morty.controller';
import { RickAndMortyService } from './rick-and-morty.service';

// Definir una clase de módulo usando el decorador Module
@Module({
    // Especificar los controladores que pertenecen a este módulo (RickAndMortyController)
    controllers: [RickAndMortyController],

    // Especificar los proveedores (servicios) que pertenecen a este módulo (RickAndMortyService)
    providers: [RickAndMortyService],
})
export class RickAndMortyModule {}
