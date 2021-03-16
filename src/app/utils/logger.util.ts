import { Color } from '../types/color.type';

export function logg(message: string, value?: any, color: Color = 'blue'): void {
    console.log(`%c ${message}`, `font-weight: bold; color: ${color};`, value);
}
