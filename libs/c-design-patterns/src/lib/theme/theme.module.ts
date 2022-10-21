import { ComponentPortal, DomPortalOutlet } from "@angular/cdk/portal";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  Injectable,
  Injector,
  ModuleWithProviders,
  NgModule,
} from "@angular/core";
import { ThemepackComponent } from "./theme.component";

@NgModule({})
export class ThemeModule {
  public static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [ThemeService],
    };
  }
}

@Injectable()
export class ThemeService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    if (!document.body.querySelector("theme-pack")) {
      new DomPortalOutlet(
        document.body,
        this.componentFactoryResolver,
        this.appRef,
        this.injector
      ).attach(new ComponentPortal(ThemepackComponent));
    }
  }
}
