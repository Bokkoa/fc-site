
interface IJob {
    id: number;
    company: string;
    from: string;
    to: string;
    activities: IJobActivities[]
}

interface IJobActivities{
    description: string;
    special: boolean;
}

export const jobs:IJob[] = [

    {
        id: 1,
        company: 'Continental',
        from: 'June 2019',
        to: 'April 2020',
        activities: [
            {
                description: "Application development and support for internal workflow areas improvement (HR, Finances, Local IT, etc)",
                special: false
            },
            {
                description: "Core IT, a Local IT customized system for assets management and resources, made in Laravel.",
                special: false,
            },
            {
                description: "My Lap, laptops management system, it records the access and exit of resources from the company, this project reach the 200% effectivity than the expected quantity.",
                special: true
            }
        ]
    }

]