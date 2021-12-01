import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Exercício 9 - Tempo de evento';
  }

  getTempo(tempo: number): string{
    const horas = Math.floor(tempo / 3600)
    const minutos = Math.floor(tempo / 60) % 60
    const segundos = tempo % 60
    return `Duração do evento: ${horas}h ${minutos}m ${segundos}s`
  }
}
