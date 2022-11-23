class JORNALISTA{
    constructor(nome,foto,){
        this.nome = nome;
        this.foto = foto;
        
        }
    analizarNoticias(){
        console.log('analizando...')
    }
    
}

class noticia extends JORNALISTA{
    constructor(nome,foto,numNoticia){
        super(nome,foto)
        this.numNoticia = numNoticia
    }
    analizarNoticias(){
        super.analizarNoticias();

    }
    inserirVideos(){
        console.log('Inserindo Video')
    }
}

noticias11 = new noticia('pablo','fotinha',11)
jornalistaFamoso = new JORNALISTA('Pablinho','Fotona')

const noticias = new String(10,20,30)
jornalistaa = new String('pablo','felipe','gilson')

class noticiasFeitas extends JORNALISTA{
    constructor(jornalistaa,nome,foto){
        super(jornalistaa,nome,foto)
    }
    noticia1 = noticias[0]+jornalistaa[0]
}
const filhinha = new noticiasFeitas('felipe','jose','gay')
let n = noticias.replace('pablo','tt');
console.log (noticias);
