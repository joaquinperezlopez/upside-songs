export type StackParamList = {
  Home: undefined;
  Prices: undefined;
};

const routes: { [name: string]: keyof StackParamList } = {
  Home: 'Home',
  Prices: 'Prices',
};

export default routes;
