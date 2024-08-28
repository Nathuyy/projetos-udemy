import puppeteer from 'puppeteer';
import ExcelJS from 'exceljs';

async function naoSeiAinda(params) {
    
const iniciarBrowser = await puppeteer.launch({ headless: false}) //incia o browser visivelmente
const pagina = await iniciarBrowser.newPage();

//navegação das páginas
await pagina.goto('https://www.linkedin.com/login')

//inserir as credencias do linkedin - tem q validar como o user vai fazer isso, são varias pessoas que vão usar o scrapping
await pagina.type('#username', 'testeprojetosemail@gmail.com'); //pega pelo id do html
await pagina.type('#password', 'projetosFodaas'); 

await pagina.click('[type="submit"]')
await pagina.waitForNavigation()


}

naoSeiAinda()