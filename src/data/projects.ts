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


export const projects: Project[] =  [
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
        title: "Laptop Manager",
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