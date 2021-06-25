import nearest from './index';

describe('round', () => {
  it('should round to the nearest 7', () => {
    const fn = nearest(7);
    expect(fn(5)).toBe(7);
    expect(fn(2)).toBe(0);
    expect(fn(11)).toBe(14);
  });

  it('should round up to the nearest 7', () => {
    const fn = nearest(7, Math.ceil);
    expect(fn(5)).toBe(7);
    expect(fn(2)).toBe(7);
    expect(fn(0)).toBe(0);
    expect(fn(11)).toBe(14);
    expect(fn(8)).toBe(14);
  });

  it('should round down to the nearest 7', () => {
    const fn = nearest(7, Math.floor);
    expect(fn(5)).toBe(0);
    expect(fn(2)).toBe(0);
    expect(fn(11)).toBe(7);
    expect(fn(8)).toBe(7);
    expect(fn(15)).toBe(14);
  });
});
