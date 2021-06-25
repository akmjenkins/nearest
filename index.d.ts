type NumberAcceptingAndReturningFn = (n: number) => number;

declare const nearest: (n: number, how?: NumberAcceptingAndReturningFn) => NumberAcceptingAndReturningFn;
export default nearest;