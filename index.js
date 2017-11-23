import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

of(1, 2, 3)
  .pipe(
    map(x => {
      return x * 2;
    })
  )
  .subscribe(x => {
    console.log(x);
  });
