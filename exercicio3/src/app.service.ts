import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Exercício 3 - Conversor de temperatura';
  }

  getCelsiusToFahrenheit(temperatura: number): string{
    return `${(temperatura * 9 / 5) + 32} ºF`
  }

  getCelsiusToKelvin(temperatura: number): string{
    return `${temperatura + 273.15} K`
  }

  getFahrenheitToKelvin(temperatura: number): string{
    return `${(temperatura - 32) * 5 / 9 + 273.15} K`
  }
}
