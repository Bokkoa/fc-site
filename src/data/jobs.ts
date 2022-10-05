
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
        ]
    }

]