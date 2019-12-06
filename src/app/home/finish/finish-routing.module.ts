import { NgModule } from '@angular/core'
import { Routes,RouterModule } from '@angular/router'
import { FinishComponent } from './finish.component'
const router : Routes = [
    {
    path:'',
    component:FinishComponent
    }
];
@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule]
})
export class finishRoutingModule { }
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { FinishComponent } from './finish.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: FinishComponent
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class finishRoutingModule {}
