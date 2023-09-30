import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve,dirname} from 'path';
import {fileURLToPath} from 'url';
const pave=resolve(dirname(fileURLToPath(import.meta.url)), './src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:[
      {
        find:'@' , replacement:pave,
      },
      {
        find:'@pages',replacement: pave+'/page'
      }
    ]
  }
})
