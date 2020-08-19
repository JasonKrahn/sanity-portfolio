export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5f3d665f3f17f8c4ec36c10d',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-studio-ixy3u2im',
                  apiId: '7d1eb874-6c5f-41d7-9cf6-7572d4bf361f'
                },
                {
                  buildHookId: '5f3d665fbf6767ea146dde17',
                  title: 'Portfolio Website',
                  name: 'sanity-portfolio-web-m89wvcq3',
                  apiId: '30fac304-8c96-45ab-ad56-c06bbf4d3b70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JasonKrahn/sanity-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-portfolio-web-m89wvcq3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
