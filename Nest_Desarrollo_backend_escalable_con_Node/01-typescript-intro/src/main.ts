//import { pokemons } from './bases/02-objects'
//import { charmander } from './bases/03-classes'
//import { charmander } from './bases/04-injection'
import { charmander } from './bases/05-decorators'
//import './bases/01
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>${charmander.name}</h1>
  </div>
`


