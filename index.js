import puppeteer from 'puppeteer';
import ExcelJS from 'exceljs';
import 'dotenv/config';

async function iniciandoLinkedin(params) {
    
const iniciarBrowser = await puppeteer.launch({ headless: false}) //incia o browser visivelmente
const pagina = await iniciarBrowser.newPage();

//navegação das páginas
await pagina.goto('https://www.linkedin.com/login')

//inserir as credencias do linkedin - tem q validar como o user vai fazer isso, são varias pessoas que vão usar o scrapping
await pagina.type('#username', process.env.LINKEDIN_EMAIL); //pega pelo id do html
await pagina.type('#password', process.env.LINKEDIN_PASSWORD); 

await pagina.click('[type="submit"]')
await pagina.waitForNavigation()

await pagina.goto(urlEmpresa)

iniciarBrowser.close()
}

const urlEmpresa = process.argv[2] //usa o [2] quando os argumentos fornecidos pelo usuário.
if (!urlEmpresa) {
    console.log("insira a url da empresa");
    process.exit(1); //vai lançar que deu um erro na execução
}

console.log(`URL da empresa fornecida: ${urlEmpresa}`);

iniciandoLinkedin(urlEmpresa)
