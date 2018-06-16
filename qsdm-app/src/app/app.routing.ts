import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { QsdmMainpageComponent } from './qsdm-mainpage/qsdm-mainpage.component';
import { QsdmQuienesSomosComponent } from './qsdm-quienes-somos/qsdm-quienes-somos.component';
import { QsdmColaboraComponent } from './qsdm-colabora/qsdm-colabora.component';

export const AppRoutes: Routes = [
    {
        path: 'quienessomos',
        component: QsdmQuienesSomosComponent
      },
      {
        path: 'colabora',
        component: QsdmColaboraComponent
      },
      {
        path: '',
        component: QsdmMainpageComponent
      }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
