import { writable } from 'svelte/store';
  
 const content = writable([]);
  
 export { content as default };