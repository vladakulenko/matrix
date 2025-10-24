export const validateInputs = (m: number, n: number): boolean => {
    const inRange = (v: number) => v >= 0 && v <= 100;
    return inRange(m) && inRange(n);
};
