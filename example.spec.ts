import { err, Ok, ok, Result } from "neverthrow";

const reciprocal: (x: number) => Result<number, string> = (x: number) =>
  x == 0.0 ? err("Zero has no Reciprocal") : ok(1.0 / x);

const cube1 = (x: number) => x * x * x;

// Js.log(cube1(reciprocal(3.0)));

const cube2 = (x: Result<number, string>): Result<number, string> => {
  return x.isOk() ? ok(x.value * x.value * x.value) : err("can calc");
};

test("should calc", () => {
  cube2(reciprocal(2)); /* ? */

  cube1(reciprocal(2).unwrapOr(1)); /* ? */

  reciprocal(2).map(cube1); /* ? */

  expect(1).toEqual(1);
});
