export interface IAlbumSpecs {
  maxPhotoNumber: number
  path: string
}
export interface IProject {
  title: string
  description: string
  url: string
  album: IAlbumSpecs
  image: string
  tools: string[]
}

export const profacadAlbum = { maxPhotoNumber: 6, path: 'profacad'};
export const laptopManagerAlbum = { maxPhotoNumber: 4, path: 'laptop_manager'};
export const contaliteAppAlbum = { maxPhotoNumber: 1, path: 'contalite_app'};
export const contaliteAdminAlbum = { maxPhotoNumber: 1, path: 'contalite_admin'};
export const adiAlbum = { maxPhotoNumber: 7, path: 'adi'};
export const documentalAlbum = { maxPhotoNumber: 4, path: 'documental'};
export const fcSiteAlbum = { maxPhotoNumber: 2, path: 'fc_site'};
export const rfidMiddlwareAlbum= { maxPhotoNumber: 2, path: 'rfid_middleware'};
export const imperityQuoterAlbum = {maxPhotoNumber: 8, path: 'quoter' }

export const projects: IProject[] =  [
  {
    title: "RFID Middleware",
    description: `RFID Middleware is a module that can be used with the SaaS products in the company for add RFID read feature
                  Compatible with WMS, made with Vue and Spring Boot
                  `,
    url: "",
    image: `imgs/projects/${rfidMiddlwareAlbum.path}/01.png`,
    album: rfidMiddlwareAlbum,
    tools: ['NodeJS', 'Typescript', 'SpringBoot', 'Web Sockets' ,'Vue (as maintainer)', 'MongoDB', 'AMQP RabbitMQ'],
  },
  {
    title: "Imperity Quoter",
    description: `Imperity Quoter is a Quotation Management System made for Altatec quotation flows, it counts with features as pdf quotation download,
                  Email send, excel price list sinchronization. Made with mciroservices, .Net Core, Django and Node
                  `,
    url: "",
    image: `imgs/projects/${imperityQuoterAlbum.path}/01.png`,
    album: imperityQuoterAlbum,
    tools: ['.NET Core (as maintainer)', 'Django','Vue (as maintainer)', 'PostgreSQL', 'MySQL', 'MSSQL', 'TDD', 'Microservices', 'Docker', 'AWS Lambda', 'AWS S3'],
  },
  {
        title: "ADI E-learning",
        description: `A software for company internal use, has features like statistics about time and courses quantity, 
                      tests creation, poll with score for course quality,
                      courses edition and building, asignations, and users management,
                      role based access
                      `,
        url: "",
        image: `imgs/projects/${adiAlbum.path}/01.png`,
        album: adiAlbum,
        tools: ['NodeJS', 'Typescript', 'AWS S3', 'SMTP Client' ,'Vue (as maintainer)', 'Docker'],
    },
    {
      title: "Documental",
      description: `Requests management system for changes on company personal documentation, based on quality department rules, \
                  has features like statistics view, user management, role based access and push notifications`,
      url: "",
      image: `imgs/projects/${documentalAlbum.path}/01.png`,
      album: documentalAlbum,
      tools: ['Firebase Push Notifications', 'Laravel', 'Laravel Echo', 'AWS S3', 'SMTP Client' ,'Vue (as maintainer)', 'Docker'],
    },
    {
      title: "Presentation Page",
      description: `My First presentation page, I can highlight the darktheme mode`,
      url: "",
      image: `imgs/projects/${fcSiteAlbum.path}/01.png`,
      album: fcSiteAlbum,
      tools: ['Dark mode', 'GatsbyJS (React)'],
    },
    {
        title: "Contalite WebApp",
        description: `Accounting and electronic billing system, developed with laravel y react, 
                      used with several providers as conekta for electronic and SPEI payments, and CFDI bill stamping.`,
        url: "https://app.contalite.com/",
        image: `imgs/projects/${contaliteAppAlbum.path}/01.png`,
        album: contaliteAppAlbum,
        tools: ['Material Ui', 'Laravel', 'Laravel Echo', 'React', 'Axios', 'Xml', 'Sass', 'Mysql'],
    },
    {
        title: "Contalite Admin",
        description: `Tax and invoice declaration management system, also include features as user statistics, payment management, SAT CFID downloads`,
        url: "https://apanel.contalite.com/",
        image: `imgs/projects/${contaliteAdminAlbum.path}/01.png`,
        album: contaliteAdminAlbum,
        tools: ['Material Ui', 'Laravel', 'React', 'Axios', 'Xml', 'Sass', 'Mysql'],
    },
    {
        title: "Laptop Manager ASM",
        description: `Assets Management System, has multiple features as assets assignations to users, movements statistics and a scanner section to validate asset owners at company entrance.`,
        url: "",
        image: `imgs/projects/${laptopManagerAlbum.path}/01.png`,
        album: laptopManagerAlbum,
        tools: ['Laravel', 'Jquery', 'Blade', 'Ajax', 'Bootstrap'],
    },
    {
        title: "PROFACAD System",
        description: `assingations, reports and courses creations for UDG personal, role base system and courses schedulers by instructor or by student (must be validated to avoid cross scheduling)`,
        url: "",
        image: `imgs/projects/${profacadAlbum.path}/01.png`,
        album: profacadAlbum,
        tools: ['Laravel', 'Vuejs', 'Jwt', 'Axios', 'Vuesax'],

    }
];