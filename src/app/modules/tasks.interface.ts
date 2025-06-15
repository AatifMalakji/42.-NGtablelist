

export interface Istudent{
    name: string;
    age: number;
}

export interface products{
    id: number;
    name: string;
}

export interface users{
    id: number,
    username: string
}

export interface task{
    completed: boolean,
    task: string
}

export interface book{
    title: string,
    author: string
}

export interface post{
    id: number,
    title: string
}

export interface employee{
    name: string,
    dept: string
}

export interface order{
    orderId: number,
    item: string
}

export interface flight{
    flightNo: string,
    destination: string
}

export interface expense{
    category: string,
    amount: number
}


export interface product{
    name: string,
    id: number;
    category: 'Electronics' | 'Fashion' | 'Grocery' | 'Accessories' | 'Stationery';
price: number
}

type depart = 'HR' | 'Engineering' | 'Design' | 'Management' | 'Support' | 'QA'
export interface employ{
    name: string,
    id: number;
    department: depart;
    experience: number
}



   type subject = 'Math' | 'Physics' | 'English' | 'Biology' | 'Chemistry';

export interface std{
    name: string,
    id: number;
    subjects: subject[]
    grades: number[]
}


type member = 'Alice'| 'Laura' |'Charlie'| 'Mike'| 'Jake'| 'Sarah'| 'David'
export interface team{
    project: string,
    teamId: number;
    members: member[]
}

export interface category{
    name: 'Electronics' | 'Groceries' |  'Stationery'|'Fitness'|  'Toys'|'Automotive',
    id: number;
    subcategories: string[]
}

export interface bk{
id: number;
title: string;
author: string;
genre: 'Non-fiction' | 'Classic' | 'Dystopia' | 'Fantasy'| 'Horror'|  'Science-fiction' 
}

export interface movie {
    id: number;
    title: string;
    rating: number;
    duration: number
}

type day =  'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday'|'Friday'|  'Saturday'
export interface workoutplan {
    id: number;
    day: day;
    activities: string[];
}

export interface event {
    id: number;
    event: string;
    attendees: string[];
}


type prdct = {
    name : string;
    qty: number;
}
export interface ordr {
    orderId: number;
    products: prdct[];
}

export interface client{
    id: number;
    name: string;
    phone : string;
    company: string
}

export interface supplier{
    id: number;
    name : string;
    location: string;
    rating: number
}

export interface restaurant{
    id: number;
    name : string;
    menus: string[];
}


export interface department{
    id: number;
    department : depart;
    manager: string;
    employees:string[]
}



export interface transaction{
    id: number;
    amount : number;
    date: string;
    status:string
}

export interface courses{
    id: number;
    title : string;
    instructor: string;
    hours:number
}

export interface pet{
    id: number;
    name : string;
    species: 'Dog' | 'Cat' | 'Parrot' | 'Rabbit' ;
    age:number
}


export interface flght{
    id: number;
    from : string;
    to: string;
    duration:string
}