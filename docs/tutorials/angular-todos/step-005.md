---
id: angular-todos-step-005
title: Saving Tasks to the Backend | Angular Todos
sidebar_label: Saving Tasks to the Backend
slug: /tutorials/angular-todos/step-005
---

# Saving Tasks to the Backend | Angular Todos

## Table of Contents

- [Step 1 - HTTP Requests](#step-1---http-requests)
- [Step 2 - Updating App](#step-2---updating-app)
- [Step 3 - Updating Tasks](#step-3---updating-tasks)
- [Step 4 - Wrap Up](#step-4---wrap-up)

## Step 1 - HTTP Requests

Users can log in to their accounts, but their tasks are still not persisting. What users will require is the ability to create tasks, mark tasks as complete, and view all of their existing tasks.

We will need a new dependency though, `qs`, in the `web` subfolder. `qs` is the library we use to stringify an object for `GET` requests.

```bash
cd web
npm install qs
npm install -D @types/qs
```

We also need to create a service to handle these requests. Also in your `web` subfolder run:

```bash
ng g s tasks
```

In the new file, `web/src/app/tasks.service.ts`, we will add the relevant imports:

```diff
import { Injectable } from '@angular/core';
+ import { HttpClient } from '@angular/common/http';
+ import { of } from 'rxjs';
+ import { catchError, map } from 'rxjs/operators';
+ import qs from 'qs';
+ import { environment } from '../environments/environment';
```

1. First, add the `HttpClient` as an argument of the constructor:

   ```ts
   export class TasksService {
      constructor(private http: HttpClient) {}
   }
   ```

2. Second, add the `create` method to the `TasksService`:

   ```ts
   create(text: string, uid: string) {
      const url = new URL('/api/tasks', environment.apiUrl).href;
      return this.http
         .post(url, { completed: false, text, uid: { id: uid } })
         .pipe(
            catchError(() => of(null)),
            map((result: any) => (result ? result : alert('Could not create task')))
         );
   }
   ```

   `create` will take two arguments, the text content of a new task as well as the unique ID of the user. It will make a `POST` request to the `/api/tasks` endpoint, sending a task object. The task object has three properties:

   - `completed`- A boolean property that tracks if a task is completed. It's being assigned to false here by default as a new task will not be completed already.
   - `text` - The string of the task itself.
   - `uid.id` - The unique ID of the user, this allows for querying tasks created by a specific user.

   One property that is not being included that we had before is `id`. Why aren't we assigning it? Well, we don't need to. The Amplication backend will assign a unique ID to all entries to the database, making management of data easier.

   If the request fails an alert will notify the user and the method will return an Observable that emits nothing. On the success of the request, an Observable that emits the new task object will be returned, with all the required properties to render it in the frontend.

3. Next, add the `getAll` method:

   ```ts
   getAll(uid: string) {
      const query = qs.stringify({
         where: { uid: { id: uid } },
         orderBy: { createdAt: 'asc' },
      });
      const url = new URL(`/api/tasks?${query}`, environment.apiUrl).href;
      return this.http.get(url).pipe(
         catchError(() => of(null)),
         map((result: any) => {
            if (!result) {
               alert('Could not get tasks');
               return [];
            }
  
            return result;
         })
      );
   }
   ```

   `getAll` takes one argument, the unique ID of the user. It will make a `GET` request to the `/api/tasks` endpoint, sending a query. In this case, we're looking to return all the tasks for a user, and the query object reflects that. Looking at the object should help make sense of what's going on.

   In the query, `{ where: { uid: { id: uid } } }`, we're telling the backend that we are looking for all entities `where` the `uid` value of a task is set to the unique ID of a user. Additionally, in the query there is `{ orderBy: { createdAt: "asc" } }`, which returns the tasks in the order they were created, from oldest to newest (`asc`ending). `createdAt` is a property that Amplication adds to all database entries by default. If the request fails, an alert will pop up notifying the user of the failure. If the request succeeds, then an Observable emitting all the tasks created by a user will be returned.

4. Then, add the `update` method:

   ```ts
   update(task: any) {
      const url = new URL(`/api/tasks/${task.id}`, environment.apiUrl).href;
      return this.http.patch(url, { completed: !task.completed }).pipe(
         catchError(() => of(null)),
         map((result: any) => (result ? result : alert('Could not update task')))
      );
   }
   ```

   `update` takes one argument, the task object. It will make a `PATCH` request to the `/api/tasks/{TASK_ID}` endpoint. The ID of the task object is included in the request and all that is being sent in the body of the request is a `completed` property, which is toggled to its new state. `PATCH` requests do not require a complete object, and only update the properties included in the request. In this case, we only want to update the `completed` property, so that's the only value we send. If the request fails an alert will pop up notifying the user of the failure. If the request succeeds, then an Observable emitting the updated task object will be returned.

5. Finally we'll need to add the `TasksService` to the `AppModule`. Open `web/src/app/app.module.ts` and import `TasksService`:

   ```diff
   import { AuthService } from './auth.service';
   import { JWTService } from './jwt.service';
   + import { TasksService } from './tasks.service';
   ```

   Then add and configure the `TasksService` to the `providers` in the `@NgModule` decorator:

   ```diff
      providers: [
         { provide: HTTP_INTERCEPTORS, useClass: JWTService, multi: true },
         AuthService,
   +      TasksService,
      ],
      bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

> The Angular CLI and the Typescript compiler may complain about `qs`. This can be resolved in two steps. In `web/angular.json` add the following to the `projects.web.architect.build.options`:
>
> ```json
> "allowedCommonJsDependencies": [
>    "qs"
> ],
> ```
>
> Additionally in `web/tsconfig.json` add the following to the `compilerOptions`:
>
> ```json
> "allowSyntheticDefaultImports": true,
> ```

## Step 2 - Updating App

Presently the `AppComponent` is handling the state of the user's tasks. Start by importing `TasksService` into `web/src/app/app.component.ts`.

```diff
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
+ import { TasksService } from './tasks.service';
```

1. First, add the `TasksService` as an argument of the constructor:

   ```diff
   export class AppComponent implements OnInit {
      tasks: any[] = [];
      user: any;
  
   -   constructor(private auth: AuthService) {}
   +   constructor(private auth: AuthService, private ts: TasksService) {}
   ```

2. In `AppComponent` we can now remove the `createTask`, as the task object is created by the `create` method of the `TasksService`.

   ```diff
   - createTask(text: string) {
   -   return {
   -      id: this.tasks.length,
   -      text,
   -      completed: false,
   -   };
   - }
  
   addTask(task: string) {
      const newTask = this.createTask(task);
      this.tasks.push(newTask);
   }
   ```

3. We'll next modify the `addTask` method:

   ```diff
   addTask(task: string) {
   -   const newTask = this.createTask(task);
   -   this.tasks.push(newTask);
   +   this.ts.create(task, this.user.id).subscribe({
   +      next: (newTask: any) => {
   +         if (!newTask) return;
   +         this.tasks.push(newTask);
   +      },
   +   });
    }
   ```

   Now that we're making an asynchronous HTTP request, we'll be working with RxJS Observables. RxJS is a library for writing asynchronous and event-based applications by using observable sequences. You can read more about it at [rxjs.dev](https://rxjs.dev/). We `subscribe` to see when the `create` resolves, and when it does, we push the newly created task into the `tasks` array of the `AppComponent`. If the request fails then `newTask` will have no value, and the `subscribe` listener will end right away.

4. Next, we'll make updates to the `completed` method:

   ```diff
   - completed(id: number) {
   -    const i = this.tasks.findIndex((t) => t.id === id);
   -    this.tasks[i].completed = !this.tasks[i].completed;
   + completed(task: any) {
   +    this.ts.update(task).subscribe({
   +       next: (updatedTask: any) => {
   +          if (!updatedTask) return;
   +          const i = this.tasks.findIndex((t) => t.id === updatedTask.id);
   +          this.tasks[i] = updatedTask;
   +       },
   +    });
   }
   ```

   `completed` is now an asynchronous HTTP request as well, so again we'll be working with RxJS Observables. The method is also updated to instead accept the task object that is being toggled rather than the ID of the task being updated. We `subscribe` to see when the `update` resolves, and when it does, we update the `completed` property of the task in the `tasks` array of the `AppComponent`. If the request fails then `updatedTask` will have no value, and the `subscribe` listener will end right away.

5. Finally, we'll make some updates regarding the `setUser` method:

   ```diff
   setUser(user: any) {
      this.user = user;
   +    if (!user) return;
   +    this.ts.getAll(user.id).subscribe({
   +       next: (tasks: any[]) => (this.tasks = [...tasks]),
   +    });
   }
   ```

   Now, when the `user` object is set, like on initialization of the `AppComponent`, we also will attempt to fetch all tasks that belong to a user.

## Step 3 - Updating Tasks

With almost everything in place, just a few changes to the `TaskComponent`'s template so that it now emits the `task` object rather than just the `task`'s ID. Make the following changes to `web/src/app/task/task.component.html`

```diff
<li [class.completed]="task.completed">
   <span>{{task.text}}</span>
-   <input type="checkbox" [checked]="task.completed" (click)="completed.emit(task?.id)" readOnly /> 
+   <input type="checkbox" [checked]="task.completed" (click)="completed.emit(task)" readOnly />
</li>
```

## Step 4 - Wrap Up

Run the application and try creating some tasks. Feel free to refresh the page as well.

![a working todo list app](./assets/step-005-001.webp)

Users' tasks are now being saved to the Amplication backend and still show when users refresh or revisit the application.

So far we've done everything through HTTP calls, however, Amplication also supports GraphQL. Next, we'll update the `Todos` app to handle all data requests via GraphQL queries and mutations.

To view the changes for this step, [visit here](https://github.com/amplication/angular-todos/compare/step-004...step-005).
