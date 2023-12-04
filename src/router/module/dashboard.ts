export const dashboardRoute = {
  name: 'dashboard',
  path: '/dashboard',
  component: 'basic',
  meta: {
    title: 'dashboard',
    sort: 1
  },
  children: [
    {
      name: 'dashboard_analysis_Analysis',
      path: '/dashboard/analysis',
      component: 'self',
      meta: {
        title: 'analysis',
        sort: 1
      }
    },
    {
      name: 'dashboard_workbench_Workbench',
      path: '/dashboard/workbench',
      component: 'self',
      meta: {
        title: 'workbench',
        sort: 2
      }
    }
  ]
}