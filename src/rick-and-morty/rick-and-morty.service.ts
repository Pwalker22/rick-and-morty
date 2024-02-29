/* eslint-disable prettier/prettier */  // Deshabilitar el formateo de eslint para este archivo

// Importar el módulo necesario del framework NestJS y el módulo axios
import { Injectable } from '@nestjs/common';
import axios from 'axios';

// Definir una clase de servicio usando el decorador Injectable
@Injectable()
export class RickAndMortyService {
    // URL base de la API de Rick and Morty
    private apiUrl = 'https://rickandmortyapi.com/api/';

    // Método asincrónico para obtener información de un personaje por su ID
    async getCharacters(id: number) {
        // Realizar una solicitud HTTP GET utilizando axios
        const response = await axios.get(`${this.apiUrl}character/${id}`);

        // Devolver los datos obtenidos de la respuesta
        return response.data;
    }
}
