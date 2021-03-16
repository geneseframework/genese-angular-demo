import { Color } from '../types/color.type';

export function logg(message: string | number, value?: any, color: Color = 'blue'): void {
    message = message.toString();
    console.log(`%c ${message}`, `font-weight: bold; color: ${color};`, value);
}
