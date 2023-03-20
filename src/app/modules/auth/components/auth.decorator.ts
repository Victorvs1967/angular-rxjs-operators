import { SignupComponent } from './signup/signup.component';
import { ComponentType } from '@angular/cdk/portal';
import { LoginComponent } from './login/login.component';
import { DialogService } from 'src/app/services/dialog.service';

export const authDialog = (componentType: ComponentType<LoginComponent | SignupComponent>) => {
  return (target: Object, propertyKey: string, descriptor: PropertyDescriptor, data: any = {}) => {
    const originalMethod = descriptor.value;
    descriptor.value = async function ( ...args: any ) {
      DialogService.getInstance()?.openDialog(data, componentType)
        .subscribe(validation => {
            if (validation) originalMethod.apply(this, args);
        }
      );
    }
  };
}
