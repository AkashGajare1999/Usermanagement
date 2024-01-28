# FormValidation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Design Decisions
1. The project is structured to have a clear separation of concerns. The user module contains components for user management, and the user.service handles CRUD operations.

2. User-Upsert Component
Using Angular Reactive Forms for efficient form handling.
Checks if it's in edit mode to load existing user data or create a new user.
Utilizes a UserService to handle data operations.

3. User-List Component
Displaying a grid of user data with columns for Name, Email, Phone, and Action.
Implements edit and delete functionalities using the UserService.
Uses a shared service or data service for communication between components.

4. Validation
Validates form inputs using Angular Reactive Forms.
Checks for existing users to prevent duplicates.

5. Data Passing
Utilizes Angular services to pass data between components.
Notifies the User-List component to refresh the user list after adding or updating a user.

6. Styling
Applies basic styling using Bootstrap/CSS for a visually appealing UI.
7. Additional Point - Type Casting
Provides a user interface for type casting by initially displaying users with dummy data from a dummy API.

8. I have created db.json file for containing data and access data or perform CRUD operations 
 run json file is 'json-server --watch db.json'
 and open another cmd and run angular project 'ng serve'