import { isZero } from './isZero';

test("0を渡すとtrueになること", () => {
  const result = isZero(0);
  expect(result).toBe(true);
});

test("1をわたしたらfalseになる", () => {
  const result = isZero(1);
  expect(result).toBe(false);
})

/**
 * expect関数とマッチャーを使い、結果が期待する値になっているかを記述
 * 今回はtoBeがマッチャー。このメソッドの引数には期待値（true）を記述
 * 
 * toBeマッチャーは、JavaScriptの厳密等価比較(===)と同じ意味
 * expect(result).toBe(true)は内部的にresult === trueかを評価する
 */