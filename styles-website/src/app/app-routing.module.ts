import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { TryProjectComponent } from './try-project/try-project.component';

const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'view-project/:projectID',
        component: ViewProjectComponent
    },
    {
        path: 'try-project',
        component: TryProjectComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
