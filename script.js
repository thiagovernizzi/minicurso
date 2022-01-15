const  imagem  =  documento . querySelector ( 'img' ) ;
const  botao  =  documento . querySelector ( 'button' ) ;
const  nomeDoPersonagem  =  document . querySelector ( '#nome' ) ;
const  espécie  =  documento . querySelector ( '#especie' ) ;
const  condicao  =  documento . querySelector ( '#status' ) ;

gerarValorAleatório  =  ( )  =>  {
    retornar  Matemática . andar ( Math . random ( ) *  671 ) ;
}
pegarPersonagem  =  ( )  =>  {
    let  numeroAleatorio  =  gerarValorAleatorio ( ) ;
    return  buscar ( `https://rickandmortyapi.com/api/character/ ${ numeroAleatorio } ` , {
        método : 'GET' ,
        cabeçalhos : {
            Aceite : 'application/json' ,
            "Content-type" : 'application/json'
        }
    } ) . then ( ( resposta )  =  > resposta.json ( ) ) . _ então ( ( dados ) => {  
        imagem . src  =  dados . imagem ;
        imagem . alt  =  dados . nome ;
        nomeDoPersonagem . innerHTML =  dados . nome ;
        espécie . innerHTML  =  dados . espécies ;
        condição . innerHTML  =  dados . estado ;
        } ) ;
}

botao . onclick  =  pegarPersonagem ;