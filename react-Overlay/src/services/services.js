// services.js
export function timeFormat(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}