export const ROUTES = {
  home: '/',
  library: '/#library',
  myPlan: '/my-plan',
  workout: (id: number) => `/workout/${id}`,
} as const;