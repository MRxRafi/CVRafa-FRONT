export interface DevopsTranslation {
  devops: {
    header: string;
    plan: {
      header: string;
      paragraph: string;
    }
    continuousIntegration: {
      header: string;
      paragraph: string;
    }
    continuousDeployment: {
      header: string;
      paragraph: string;
    }
    why: {
      header: string;
      paragraph: string;
    }
  };
}

export const SPANISH_TRANSLATIONS: DevopsTranslation = {
  devops: {
    header: 'DevOps',
    plan: {
      header: 'Plan',
      paragraph: 'A través de la metodología adecuada al proyecto (Scrum o RUP, por ejemplo), un repositorio de código remoto\n' +
        '      (como Github) y usando una herramienta de comunicación como Slack se puede organizar un equipo. Por supuesto\n' +
        '      existen muchas más herramientas, como Jira o Trello.'
    },
    continuousIntegration: {
      header: 'Integración Continua',
      paragraph: 'Entre las prácticas adecuadas se encuentra participar activamente en el proyecto, haciendo aportaciones\n' +
        '    al repositorio remoto a través de pequeñas tareas. Las herramientas como TravisCI, Jenkins o Github Actions hacen automático\n' +
        '    gran parte del trabajo. Ejecutan el flujo deseado, desde que se hace esa pequeña aportación estas herramientas\n' +
        '    son capaces de ejecutar los tests del proyecto y lanzar las herramientas que analizan el código para buscar\n' +
        '    posibles Smell Code.'
    },
    continuousDeployment: {
      header: 'Despliegue continuo',
      paragraph: 'Algunas herramientas que nos permiten enlazar la integración continua con el despliegue son, por ejemplo,\n' +
        '    Heroku y Firebase Hosting. Cualquier cambio en el repositorio de código lanzará todo el flujo hasta su despliegue.'
    },
    why: {
      header: '¿Por qué he nombrado algunas de estas herramientas?',
      paragraph: 'Todas las herramientas o metodologías nombradas las he usado y en menor o mayor medida, las conozco.\n' +
        '      Si necesitáis más información, ¡no dudéis en contactar!'
    }
  }
};

export const ENGLISH_TRANSLATIONS: DevopsTranslation = {
  devops: {
    header: 'DevOps',
    plan: {
      header: 'Plan',
      paragraph: 'Through the appropriate methodology for the project (Scrum or RUP, for example), a remote code repository ' +
        '(such as Github) and using a communication tool such as Slack, a team can be organized. Of course there are many more tools, ' +
        'such as Jira or Trello.'
    },
    continuousIntegration: {
      header: 'Continuous Integration',
      paragraph: 'Good practices include actively participating in the project, making contributions to the remote repository ' +
        'through small tasks. Tools like TravisCI, Jenkins or Github Actions automatically do much of the work. They execute the desired flow, ' +
        'from the moment that small contribution is made, these tools are able to run the project tests and launch the tools that ' +
        'analyze the code to look for possible Smell Code.'
    },
    continuousDeployment: {
      header: 'Continuous Deployment',
      paragraph: 'Some tools that allow us to link continuous integration with deployment are, for example, Heroku and Firebase Hosting. ' +
        'Any change in the code repository will launch the whole flow until deployment.'
    },
    why: {
      header: 'Why have I named some of these tools?',
      paragraph: 'I have used all the tools or methodologies named before, and to a greater or lesser extent, ' +
        'I know them. If you need more information, don\'t hesitate to contact me!'
    }
  }
};
