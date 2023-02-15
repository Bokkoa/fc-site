
export interface IJob {
    id: number;
    company: string;
    from: string;
    to: string;
    role: string;
    companyLink: string;
    activities: IJobActivities[];
}

export interface IJobActivities{
    description: string;
    special: boolean;
}

export const jobs:IJob[] = [
    {
        id: 1,
        company: 'Continental',
        from: 'June 2019',
        to: 'April 2020',
        role: 'Application Support Engineer',
        companyLink: 'https://www.continental.com/es-mx/',
        activities: [
            {
                description: "Application development and support for internal workflow areas improvement (HR, Finances, Local IT, etc)",
                special: false
            },
            {
                description: '"Core IT", a Local IT customized system for assets management and resources, made in Laravel.',
                special: false,
            },
            {
                description: '"My Lap", laptops management system, it records the access and exit of resources from the company, this project reach the 200% effectivity than the expected quantity.',
                special: true
            }
        ]
    },
    {
        id: 2,
        company: 'UDG (Social Service)',
        from: 'October 2019',
        to: 'August 2020',
        role: 'Fullstack Developer',
        companyLink: 'http://www.cucei.udg.mx/',
        activities: [
            {
                description: "Fullstack development on course's platform for UDG staff, course's customization and offer of them.",
                special: true
            },
            {
                description: "Multi role access system.",
                special: false,
            },
            {
                description: "Fullstack development in Vue and NodeJS",
                special: false
            }
        ]
    },
    {
        id: 3,
        company: 'Roistom',
        from: 'June 2020',
        to: 'July 2021',
        role: 'IT Professional',
        companyLink: 'https://roistom.com/',
        activities: [
            {
                description: "VPS and domains management.",
                special: false
            },
            {
                description: "Web maintance  and SQL service management for ConpaqI",
                special: false,
            },
            {
                description: "Technical support in hardware devices.",
                special: false
            }
        ]
    },
    {
        id: 4,
        company: 'Contalite',
        from: 'June 2020',
        to: 'July 2021',
        role: 'Fullstack Developer',
        companyLink: 'https://contalite.com/',
        activities: [
            {
                description: "Fullstack development on Contalite app ( Invoice stamping (electronic tax validation), webhooks, electronic payments, mailing )  made with Laravel and React.",
                special: true
            },
            {
                description: "Coordination on project modules, team roles and activities asignment.",
                special: false,
            },
            {
                description: "Git versioning and  basic server configuration.",
                special: false
            }
        ]
    },
    {
        id: 5,
        company: 'Altatec',
        from: 'June 2021',
        to: 'July 2022',
        role: 'SemiSR Developer',
        companyLink: 'https://altatec-de-occidente-sa-de-cv.negocio.site/',
        activities: [
            {
                description: "Development on courses platform, made with Node and VueJs.",
                special: false
            },
            {
                description: "Support of quotation's software and development of pricelist microservice. Support of  .NET Core and development with Django and TDD Methodology",
                special: true,
            },
            {
                description: "Backend development for industrial dining room employee's petition's registry, API RESTful with NodeJS, NestJS and Lumen microservices. It erases the physical ticket cost and agilizes the dining room flow.",
                special: true,
            },
            {
                description: "Payroll kiosko support development, a simply application that print or send by email the employee's payroll file, made with NodeJS and React.",
                special: false,
            },
            {
                description: "Documental changes, an application for ISO requirements that allows to quality department agilizes its processes for employee's documentation. Made with Laravel for API rest and push notifications with Firebase service and aws S3 Storage integration",
                special: false,
            }
        ]
    },
    {
        id: 6,
        company: 'Altatec',
        from: 'July 2022',
        to: 'Current',
        role: 'Techlead Developer',
        companyLink: 'https://altatec-de-occidente-sa-de-cv.negocio.site/',
        activities: [
            {
              description: "OAuth server provider for SaaS purposes, also a RBAC system development module for agnostic management. Built with NodeJS",
              special: true,
            },
            {
              description: "Agile and Scrum process standarization",
              special: false,
            },
            {
                description: "Warehouse management system, made with microservices, DDD and CQRS architecture patterns, we use .NET Core, NodeJS and Spring boot for the app's development.",
                special: true,
            },
            {
                description: "RFID Middleware that allows Zebra and Honneywell readers connection. One of the features was the compatibility with another company applications as a plugin (microservice) made with Springboot and Vue",
                special: true,
            },
            {
                description: "Learning path's creation for each developer member focused on their role specialization.",
                special: false,
            },
            {
                description: "Architecture definition, department goals and objetives with a transition porpuse, it was segmented in different phases to reach an scalable architecture and multi-tenat SaaS software",
                special: true,
            },
        ]
    },


]