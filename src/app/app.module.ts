import { provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";

@NgModule({
    providers: [
      provideHttpClient(),
    ],
    // ... other application configuration
  })
  export class AppModule {}