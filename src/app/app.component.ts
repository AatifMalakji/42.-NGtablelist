import { Component } from '@angular/core';
import { bk, book, category, client, department, employ, employee, event, expense, flght, flight, Istudent, movie, order, ordr, pet, post, product, products, restaurant, std, supplier, task, team, transaction, users, workoutplan } from './modules/tasks.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NGtablelist';

   fruits: string[] = ['Apple', 'Banana', 'Mango', 'Grapes'];

   colors: Array<string> = ['Red', 'Blue', 'Green', 'Yellow'];
 
   numbers: number[] = [1, 2, 3, 4, 5];
 
   cities :string[]= ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']; 
   students1 : Istudent[]= [{ name: 'Amit', age: 20 }, { name: 'Pooja', age: 22 }];
    products2 : products[] = [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Mobile' }]; 
    users : users[] = [{ id: 101, username: 'john' }, { id: 102, username: 'jane' }]; 
    languages :  string[] = ['English', 'Hindi', 'Marathi', 'Tamil']; 
     countries : string[] = ['India', 'USA', 'UK', 'Canada'];
   hobbies : string[] = ['Singing', 'Dancing', 'Painting'];
   tasks : task[] = [{ task: 'Angular Practice', completed: false }, { task: 'Meeting', completed: true }];
   books1 : book[] = [{ title: 'Angular Basics', author: 'John' }, { title: 'TS Guide', author: 'Smith' }];
   posts : post[] = [{ id: 1, title: 'First Post' }, { id: 2, title: 'Second Post' }];
   employees1 : employee[] = [{ name: 'Ravi', dept: 'HR' }, { name: 'Neha', dept: 'IT' }];
   courses1 : string[] = ['Angular', 'React', 'Vue'];
   scores : number[] = [85, 90, 75, 60];
   months : string[] = ['Jan', 'Feb', 'Mar', 'Apr'];
   events1 : string[] = ['Login', 'Logout', 'Register'];
   orders1 : order[] = [{ orderId: 1, item: 'Pen' }, { orderId: 2, item: 'Notebook' }];
   skills : string[]= ['JavaScript', 'TypeScript', 'Angular'];
   roles : string[] = ['Admin', 'Editor', 'User'];
   alerts : string[] = ['Success', 'Error', 'Warning'];
  statuses: string[]  = ['Pending', 'In Progress', 'Completed'];
  flights1 : flight[] = [{ flightNo: 'AI101', destination: 'New York' }, { flightNo: 'AI202', destination:
 'London' }];
   expenses : expense[] = [{ category: 'Food', amount: 250 }, { category: 'Travel', amount: 500 }];
 
 
  products : product[] = [
   { id: 1, name: 'Tablet', category: 'Electronics', price: 299 },
   { id: 2, name: 'Shoes', category: 'Fashion', price: 79 },
   { id: 3, name: 'Milk', category: 'Grocery', price: 4 },
   { id: 4, name: 'Watch', category: 'Accessories', price: 150 },
   { id: 5, name: 'Book', category: 'Stationery', price: 20 },
   { id: 6, name: 'Bag', category: 'Fashion', price: 35 }
 ];
 
  employees : employ[] = [
   { id: 1, name: 'Alice', department: 'HR', experience: 5 },
   { id: 2, name: 'Charlie', department: 'Engineering', experience: 10 },
   { id: 3, name: 'Mike', department: 'Design', experience: 3 },
   { id: 4, name: 'Jane', department: 'Management', experience: 7 },
   { id: 5, name: 'David', department: 'Support', experience: 2 },
   { id: 6, name: 'Laura', department: 'QA', experience: 4 }
 ];
 
  students : std[] = [
   { id: 1, name: 'David', subjects: ['Math', 'Physics'], grades: [90, 85] },
   { id: 2, name: 'Charlie', subjects: ['English', 'Biology'], grades: [78, 82] },
   { id: 3, name: 'Mike', subjects: ['Chemistry', 'Math'], grades: [79, 95] },
   { id: 4, name: 'Alice', subjects: ['Physics', 'Math'], grades: [91, 87] },
   { id: 5, name: 'Jake', subjects: ['Biology', 'English'], grades: [72, 80] },
   { id: 6, name: 'Sarah', subjects: ['Math', 'Chemistry'], grades: [97, 93] }
 ];
 
  teams : team[]= [
   { teamId: 1, project: 'Website Redesign', members: ['Alice', 'Charlie', 'Mike', 'Jake', 'Sarah', 'David'] },
   { teamId: 2, project: 'Mobile App Development', members: ['Mike', 'Laura', 'Charlie', 'Charlie', 'Alice', 'Jake'] },
   { teamId: 3, project: 'API Integration', members: ['Charlie', 'Mike', 'Alice', 'Sarah', 'Jake', 'Laura'] },
   { teamId: 4, project: 'Chatbot Implementation', members: ['Mike', 'Charlie', 'Jake', 'Laura', 'Sarah', 'Alice'] },
   { teamId: 5, project: 'Design Update', members: ['Mike', 'Charlie', 'Laura', 'Jake', 'Alice', 'Sarah'] },
   { teamId: 6, project: 'Data Cleanup', members: ['Charlie', 'Mike', 'Jake', 'Alice', 'Laura', 'Sarah'] }
 ];
 
 
  categories : category[] = [
   { id: 1, name: 'Electronics', subcategories: ['Phones', 'Tablets', 'Laptops', 'Cameras', 'Accessories', 'Speakers'] },
   { id: 2, name: 'Groceries', subcategories: ['Fruits', 'Beverage', 'Dairy', 'Snacks', 'Nuts', 'Frozen Foods'] },
   { id: 3, name: 'Stationery', subcategories: ['Notebooks', 'Pens', 'Pencils', 'Erasers', 'Scissors', 'Colors'] },
   { id: 4, name: 'Fitness', subcategories: ['Dumbbells', 'Yoga Mats', 'Protein', 'Bands', 'Bottles', 'Supplements'] },
   { id: 5, name: 'Toys', subcategories: ['Puzzles', 'Blocks', 'Dolls', 'Stuffed Toy', 'Games', 'Educational'] },
   { id: 6, name: 'Automotive', subcategories: ['Tires', 'Batteries', 'Brakes', 'Seats', 'Helmets', 'Covers'] }
 ];
 
 
  books : bk[]= [
   { id: 1, title: 'Atomic Habits', author: 'James Clear', genre: 'Non-fiction' },
   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic' },
   { id: 3, title: '1984', author: 'George Orwell', genre: 'Dystopia' },
   { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
   { id: 5, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Horror' },
   { id: 6, title: 'Dune', author: 'Frank Herbert', genre: 'Science-fiction' }
 ];
  movies : movie[] = [
   { id: 1, title: 'Inception', rating: 8.8, duration: 148 },
   { id: 2, title: 'Gladiator', rating: 8.5, duration: 155 },
   { id: 3, title: 'The Godfather', rating: 9.2, duration: 175 },
   { id: 4, title: 'Batman Begins', rating: 8.2, duration: 140 },
   { id: 5, title: 'Forrest Gump', rating: 8.7, duration: 142 },
   { id: 6, title: 'Pulp Fiction', rating: 9.0, duration: 154 }
 ];
 
  workoutPlans: workoutplan[] = [
   { id: 1, day:'Monday', activities:['Push-up','Squat','Planks','Lunges','Dips','Crunches'] },
   { id: 2, day:'Tuesday', activities:['Running','Cycling','Jumping Jacks','High Knees','Pull-up','Deadlift'] },
   { id: 3, day:'Wednesday', activities:['Yoga','Pilates','Bridge','Cobra','Downward Dog','Meditation'] },
   { id: 4, day:'Thursday', activities:['Boxing','Skipping','Sprints','Burpees','Climber','Jabs'] },
   { id: 5, day:'Friday', activities:['Swimming','Backstroke','Freestyle','Diving','Flipping','Relay'] },
   { id: 6, day:'Saturday', activities:['Weight lifting','Clean and press','Snatch','Bicep Curl','Leg press','Dead hang'] }
 ];
 
  events : event[]= [
   { id: 1, event:'Tech Conference', attendees:['Mike','Charlie','Alice','Jake','Laura','Sarah'] },
   { id: 2, event:'Music Fest', attendees:['Mike','Charlie','Charlie','Mike','Alice','Jake'] },
   { id: 3, event:'Art Gala', attendees:['Mike','Charlie','Laura','Alice','Jake','Mike'] },
   { id: 4, event:'Business Summit', attendees:['Mike','Charlie','Mike','Alice','Charlie','Mike'] },
   { id: 5, event:'Developer Meetup', attendees:['Mike','Charlie','Mike','Jake','Charlie','Mike'] },
   { id: 6, event:'Design Workshop', attendees:['Mike','Charlie','Mike','Alice','Charlie','Mike'] }
 ];
 
  orders : ordr[]= [
   { orderId: 1, products: [ { name:'Tablet', qty: 2}, { name:'Shoes', qty: 1}, { name:'Milk', qty: 4}, { name:'Bag', qty: 1}, { name:'Book', qty: 2}, { name:'Watch', qty: 1}] },
   { orderId: 2, products: [ { name:'Milk', qty: 3}, { name:'Tablet', qty: 1}, { name:'Book', qty: 2}, { name:'Shoes', qty: 1}, { name:'Bag', qty: 1}, { name:'Watch', qty: 1}] },
   { orderId: 3, products: [ { name:'Bag', qty: 1}, { name:'Book', qty: 2}, { name:'Tablet', qty: 1}, { name:'Milk', qty: 3}, { name:'Shoes', qty: 1}, { name:'Watch', qty: 1}] },
   { orderId: 4, products: [ { name:'Book', qty: 2}, { name:'Bag', qty: 1}, { name:'Tablet', qty: 1}, { name:'Milk', qty: 2}, { name:'Shoes', qty: 2}, { name:'Watch', qty: 1}] },
   { orderId: 5, products: [ { name:'Milk', qty: 1}, { name:'Tablet', qty: 2}, { name:'Book', qty: 1}, { name:'Watch', qty: 1}, { name:'Bag', qty: 2}, { name:'Shoes', qty: 1}] },
   { orderId: 6, products: [ { name:'Book', qty: 1}, { name:'Bag', qty: 1}, { name:'Milk', qty: 2}, { name:'Watch', qty: 2}, { name:'Shoes', qty: 1}, { name:'Tablet', qty: 1}] }
 ];
 
 
  clients : client[] = [
   { id: 1, name:'Mike Rogers', phone:'123-123-1234', company:'Tech Solutions' },
   { id: 2, name:'Charlie Brown', phone:'123-124-1235', company:'Design Hub' },
   { id: 3, name:'Alice Harper', phone:'123-125-1236', company:'Business Co.' },
   { id: 4, name:'Jake Peterson', phone:'123-126-1237', company:'Event Masters' },
   { id: 5, name:'Laura James', phone:'123-127-1238', company:'Fitness World' },
   { id: 6, name:'Sarah Connor', phone:'123-128-1239', company:'AI Innovations' }
 ];
 
 
  suppliers : supplier[]= [
   { id: 1, name:'Supplier A', location:'New York', rating:4.5 },
   { id: 2, name:'Supplier B', location:'Texas', rating:4.2 },
   { id: 3, name:'Supplier C', location:'California', rating:4.7 },
   { id: 4, name:'Supplier D', location:'Colorado', rating:4.1 },
   { id: 5, name:'Supplier E', location:'Florida', rating:4.9 },
   { id: 6, name:'Supplier F', location:'Ohio', rating:4.3 }
 ];
 
 
  restaurants  :restaurant[] = [
   { id: 1, name:'Pizza Town', menus:['Pizza','Pasta','Sides','Beverage','Burger','Dessert'] },
   { id: 2, name:'Burger Heights', menus:['Burgers','Fries','Shakes','Sides','Beverage','Chicken'] },
   { id: 3, name:'Healthy Eats', menus:['Salads','Bowls','Protein','Sides','Beverage','Vegan'] },
   { id: 4, name:'Sushi World', menus:['Sushi','Ramen','Tempura','Beverage','Sides','Nigiri'] },
   { id: 5, name:'BBQ Haven', menus:['Ribs','Brisket','Sides','Beverage','Fries','Burger'] },
   { id: 6, name:'Taco Rush', menus:['Tacos','Burritos','Quesadilla','Sides','Beverage','Salsa'] }
 ];
 
 
  departments : department[]= [
   { id: 1, department:'HR', manager:'Alice Harper', employees:['Mike','Charlie','Laura','Jake','Sarah','Alice'] },
   { id: 2, department:'Engineering', manager:'Charlie Brown', employees:['Mike','Charlie','Jake','Alice','Charlie','Mike'] },
   { id: 3, department:'Design', manager:'Mike Rogers', employees:['Charlie','Mike','Jake','Alice','Charlie','Mike'] },
   { id: 4, department:'Support', manager:'Jake Peterson', employees:['Mike','Charlie','Mike','Alice','Charlie','Mike'] },
   { id: 5, department:'Management', manager:'Laura James', employees:['Mike','Charlie','Mike','Jake','Charlie','Mike'] },
   { id: 6, department:'QA', manager:'Sarah Connor', employees:['Mike','Charlie','Mike','Alice','Charlie','Mike'] }
 ];
 
 
  transactions : transaction[] = [
   { id: 1, amount: 500, date:'2025-06-14', status:'Success' },
   { id: 2, amount: 220, date:'2025-06-13', status:'Failed' },
   { id: 3, amount: 1450, date:'2025-06-12', status:'Success' },
   { id: 4, amount: 310, date:'2025-06-11', status:'Success' },
   { id: 5, amount: 5000, date:'2025-06-10', status:'Failed' },
   { id: 6, amount: 780, date:'2025-06-09', status:'Success' }
 ];
 
 
  courses = [
   { id: 1, title:'Javascript Basics', instructor:'Mike Rogers', hours:30 },
   { id: 2, title:'Angular Fundamentals', instructor:'Charlie Brown', hours:40 },
   { id: 3, title:'Angular Masterclass', instructor:'Alice Harper', hours:35 },
   { id: 4, title:'NodeJS API Development', instructor:'Jake Peterson', hours:50 },
   { id: 5, title:'Python Data Analysis', instructor:'Laura James', hours:60 },
   { id: 6, title:'AI and Machine Learning', instructor:'Sarah Connor', hours:80 }
 ];
 
 
  pets : pet[] = [
   { id: 1, name:'Buddy', species:'Dog', age:2 },
   { id: 2, name:'Whiskers', species:'Cat', age:3 },
   { id: 3, name:'Charlie', species:'Parrot', age:1 },
   { id: 4, name:'Floppy', species:'Rabbit', age:4 },
   { id: 5, name:'Bruno', species:'Dog', age:5 },
   { id: 6, name:'Mittens', species:'Cat', age:2 }
 ];
 
 flights : flght[]= [
   { id: 1, from:'New York', to:'Paris', duration:'7h 30m' },
   { id: 2, from:'Sydney', to:'Melbourne', duration:'1h 45m' },
   { id: 3, from:'Berlin', to:'London', duration:'2h 15m' },
   { id: 4, from:'San Francisco', to:'Denver', duration:'2h 30m' },
   { id: 5, from:'Tokyo', to:'Shanghai', duration:'3h 20m' },
   { id: 6, from:'Mumbai', to:'Bangalore', duration:'1h 50m' }
 ];
 
 
 
}
