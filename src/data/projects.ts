interface AlbumSpecs {
  maxPhotoNumber: number
  path: string
}
interface Project {
  title: string
  description: string
  url: string
  album: AlbumSpecs
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


export const projects: Project[] =  [
  {
    title: "RFID Middleware",
    description: `RFID Middleware is a module that can be used with the SaaS products in the company for add RFID read feature
                  Compatible with WMS, made with Vue and Spring Boot
                  `,
    url: "",
    image: `/img/projects/${rfidMiddlwareAlbum.path}/01.png`,
    album: adiAlbum,
    tools: ['NodeJS', 'Typescript', 'SpringBoot', 'SMTP Client' ,'Vue (as maintainer)', 'MongoDB'],
  },
  {
        title: "ADI E-learning",
        description: `A software for company internal use, has features like statistics about time and courses quantity, 
                      tests creation, poll with score for course quality,
                      courses edition and building, asignations, and users management,
                      role based access
                      `,
        url: "",
        image: `/img/projects/${adiAlbum.path}/01.png`,
        album: adiAlbum,
        tools: ['NodeJS', 'Typescript', 'AWS S3', 'SMTP Client' ,'Vue (as maintainer)'],
    },
    {
      title: "Documental",
      description: `Requests management system for changes on company personal documentation, based on quality department rules, \
                  has features like statistics view, user management, role based access and push notifications`,
      url: "",
      image: `/img/projects/${documentalAlbum.path}/01.png`,
      album: documentalAlbum,
      tools: ['Firebase Push Notifications', 'Laravel', 'Laravel Echo', 'AWS S3', 'SMTP Client' ,'Vue (as maintainer)'],
    },
    {
      title: "Presentation Page",
      description: `My First presentation page, I can highlight the darktheme mode`,
      url: "",
      image: `/img/projects/${fcSiteAlbum.path}/01.png`,
      album: fcSiteAlbum,
      tools: ['Dark mode', 'GatsbyJS (React)'],
    },
    {
        title: "Contalite WebApp",
        description: `Accounting and electronic billing system, developed with laravel y react, 
                      used with several providers as conekta for electronic and SPEI payments, and CFDI bill stamping.`,
        url: "https://app.contalite.com/",
        image: `/img/projects/${contaliteAppAlbum.path}/01.png`,
        album: contaliteAppAlbum,
        tools: ['Material Ui', 'Laravel', 'Laravel Echo', 'React', 'Axios', 'Xml', 'Sass', 'Mysql'],
    },
    {
        title: "Contalite Admin",
        description: `Tax and invoice declaration management system, also include features as user statistics, payment management, SAT CFID downloads`,
        url: "https://apanel.contalite.com/",
        image: `/img/projects/${contaliteAdminAlbum.path}/01.png`,
        album: contaliteAdminAlbum,
        tools: ['Material Ui', 'Laravel', 'React', 'Axios', 'Xml', 'Sass', 'Mysql'],
    },
    {
        title: "Laptop Manager ASM",
        description: `Assets Management System, has multiple features as assets assignations to users, movements statistics and a scanner section to validate asset owners at company entrance.`,
        url: "",
        image: `/img/projects/${laptopManagerAlbum.path}/01.png`,
        album: laptopManagerAlbum,
        tools: ['Laravel', 'Jquery', 'Blade', 'Ajax', 'Bootstrap'],
    },
    {
        title: "PROFACAD System",
        description: `assingations, reports and courses creations for UDG personal, role base system and courses schedulers by instructor or by student (must be validated to avoid cross scheduling)`,
        url: "",
        image: `/img/projects/${profacadAlbum.path}/01.png`,
        album: profacadAlbum,
        tools: ['Laravel', 'Vuejs', 'Jwt', 'Axios', 'Vuesax'],

    }
];