import { Helper } from '@slyte/component';

Helper.register('getNestedValue', function (obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
});
