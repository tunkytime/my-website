export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6095660c8b62f48d60859ef0',
                  title: 'Sanity Studio',
                  name: 'my-website-studio-yewvg24f',
                  apiId: '4d5414b0-c481-4490-bc1f-2dfa3aa8f90d'
                },
                {
                  buildHookId: '6095660c01560274d13f556f',
                  title: 'Blog Website',
                  name: 'my-website-web-t1ind5cq',
                  apiId: '31e22061-ce95-41fc-8a25-e0f27165a76d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tunkytime/my-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://my-website-web-t1ind5cq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
