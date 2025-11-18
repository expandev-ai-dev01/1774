export function generateMockId(): number {
  return Math.floor(Math.random() * 1000000) + 1;
}

export function generateMockDate(): Date {
  return new Date();
}
