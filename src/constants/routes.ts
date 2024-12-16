import curry from "lodash.curry";

export const fillRoute = curry(
  (route: string, fillObject: Record<string, string | number>) =>
    Object.entries(fillObject).reduce(
      (acc, [key, value]) => acc.replace(`{${key}}`, `${value}`),
      route
    )
);

const ROOT = "/";
export const ROUTES = Object.freeze({
  ROOT,
  INSCRIPTION: fillRoute(`${ROOT}{walletAddress}/inscription/{inscriptionId}`),
});
