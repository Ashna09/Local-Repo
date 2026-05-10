// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  /*Time out here is for entire project. Means it will be applicable for each component, except assertions. 
  Assertions have different time out.
  By deafult time out is 30s. The below timeout with over write 30s. 
  Time out is in ms here. If you want 60s just replace 40 with 60 and multiply it my 1000 */

   timeout: 40*1000,

   //Asserions timeout
   expect : {
    timeout: 40*1000,
   },

  
  use: {
    browserName : 'chromium'
    
  },

});