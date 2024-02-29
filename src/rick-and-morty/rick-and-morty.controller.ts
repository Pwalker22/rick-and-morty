/* eslint-disable prettier/prettier */  // Deshabilitar el formateo de eslint para este archivo

// Importar los módulos necesarios del framework NestJS
import { Controller, Get, Param } from '@nestjs/common';

// Importar el servicio RickAndMortyService
import { RickAndMortyService } from './rick-and-morty.service';

// Definir una clase de controlador usando el decorador Controller con la ruta base 'rick-and-morty'
@Controller('rick-and-morty')
export class RickAndMortyController {
    // Inyectar el servicio RickAndMortyService en el controlador
    constructor(private readonly rickAndMortyService: RickAndMortyService) {}

    // Manejar la solicitud HTTP GET para obtener información sobre un personaje por su ID
    @Get('character/:id')
    async getCharacters(@Param('id') id: number) {
        // Llamar al método del servicio para obtener la información del personaje
        return this.rickAndMortyService.getCharacters(id);
    }
}
