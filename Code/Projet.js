//Définition de mes variables et de ce qu elles contiennent (PV des joueurs, des monstres et compteur)
var pvassassin = 100;
var pvtireur = 100;
var pvmage = 100;
var pvguerrier = 100;
var pvmonstrebleu = 150;
var pvmonstrevert = 150;
var pvmonstrerouge = 150;
var compteur = 0;


//Ma fonction attendre
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
// Aide-mémoire : sleep(1000).then(){
//                    code à insérer ici
//                    }

//J'extrais mes variables de mon code html pour les implémenter dans mon code js
var pvmonstrevertDOM = document.getElementById("monstrepv1");
var pvmonstrebleuDOM = document.getElementById("monstrepv2");
var pvmonstrerougeDOM = document.getElementById("monstrepv3");
var pvassassinDOM = document.getElementById("heropv1");
var pvtireurDOM = document.getElementById("heropv2");
var pvmageDOM = document.getElementById("heropv3");
var pvguerrierDOM = document.getElementById("heropv4");
var attackButton = document.getElementById("Attaque");
var attackspeButton = document.getElementById("Attaque_speciale");
var montourDOM = document.getElementById("montour")

// Je déclare mes variables représentant mes héros
var assassinDOM = document.getElementsByClassName("Hero_Assassin");
var tireurDOM = document.getElementsByClassName("Hero_Tireur");
var mageDOM = document.getElementsByClassName("Hero_Mage");
var guerrierDOM = document.getElementsByClassName("Hero_Guerrier");


// Je déclare mes variables représentant mes monstres
var monstrevertDOM = document.getElementsByClassName("Monstre_Vert")[0];
var monstrebleuDOM = document.getElementsByClassName("Monstre_Bleu")[0];
var monstrerougeDOM = document.getElementsByClassName("Monstre_Rouge")[0];

//Définition de mon bouton 'attaque'

function aleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

attackButton.onclick = function Attaque() {
    if (compteur == 0){
        montourDOM.innerHTML = "L'assassin inflige 25 points de dégats au monstre vert !";
        pvmonstrevert -= 25; 
        pvmonstrevertDOM.innerHTML = pvmonstrevert + "/150"; 
        setTimeout(() => {
            monstrevertDOM.src = "image/Monstre/Monster_Get_Attacked.png";
        }, 10); 
        setTimeout(() => {
            monstrevertDOM.src = "image/Monstre/Monster_1.png";
        }, 300); 
        compteur += 1;
        }else if(compteur == 1){
            //Monstre Vert//
            montourDOM.innerHTML = "Le Tireur inflige 25 points de dégats au monstre Bleu !";
            pvmonstrebleu -= 25; 
            pvmonstrebleuDOM.innerHTML = pvmonstrebleu + "/150"; 
            setTimeout(() => {
                monstrebleuDOM.src = "image/Monstre/Monster_Get_Attacked_Bleu.png";
            }, 10); 
            setTimeout(() => {
                monstrebleuDOM.src = "image/Monstre/Monster_1_Bleu.png";
            }, 300); 
            compteur += 1;
        }else if(compteur == 2){
            //Monstre Bleu//
            montourDOM.innerHTML = "Le Mage inflige 25 points de dégats au monstre Rouge !";
            pvmonstrerouge -= 25; 
            pvmonstrerougeDOM.innerHTML = pvmonstrerouge + "/150"; 
            setTimeout(() => {
                monstrerougeDOM.src = "image/Monstre/Monster_Get_Attacked_Rouge.png";
            }, 10); 
            setTimeout(() => {
                monstrerougeDOM.src = "image/Monstre/Monster_1_Rouge.png";
            }, 300); 
            compteur += 1; 
        }else if(compteur == 3){
            //Monstre Rouge//
            montourDOM.innerHTML = "Le Guerrier inflige 25 points de dégats au monstre Vert !";
            pvmonstrevert -= 25; 
            pvmonstrevertDOM.innerHTML = pvmonstrevert + "/150"; 
            setTimeout(() => {
                monstrevertDOM.src = "image/Monstre/Monster_Get_Attacked.png";
            }, 10); 
            setTimeout(() => {
                monstrevertDOM.src = "image/Monstre/Monster_1.png";
            }, 300);
            compteur += 1;
        }else if(compteur == 4){
// RIPOSTE DES MONSTRES //
            montourDOM.innerHTML = "Attention, Les monstres ripostent !";
            tourmonstre = aleatoire(0, 3);
            if (tourmonstre == 0){
                setTimeout(() => {
                    monstrevertDOM.src = "image/Monstre/Monster_2.png";
                }, 10); 
                setTimeout(() => {
                    monstrevertDOM.src = "image/Monstre/Monster_3.png";
                }, 300);
                setTimeout(() => {
                    monstrevertDOM.src = "image/Monstre/Monster_4.png";
                }, 600);
                setTimeout(() => {
                    monstrevertDOM.src = "image/Monstre/Monster_1.png";
                }, 800); 
                montourDOM.innerHTML = "Attention, Les monstres ciblent aléatoirement l'assassin !";
                //Attaque aléatoire sur Assassin//
                pvassassin -= 25;
                pvassassinDOM.innerHTML = pvassassin + "/100";
            }
            if (tourmonstre == 1){
                setTimeout(() => {
                    monstrebleuDOM.src = "image/Monstre/Monster_2_Bleu.png";
                }, 10); 
                setTimeout(() => {
                    monstrebleuDOM.src = "image/Monstre/Monster_3_Bleu.png";
                }, 300);
                setTimeout(() => {
                    monstrebleuDOM.src = "image/Monstre/Monster_4_Bleu.png";
                }, 600);
                setTimeout(() => {
                    monstrebleuDOM.src = "image/Monstre/Monster_1_Bleu.png";
                }, 800); 
                montourDOM.innerHTML = "Attention, Les monstres ciblent aléatoirement le tireur !";
                //Attaque aléatoire sur Tireur//
                pvtireur -= 25;
                pvtireurDOM.innerHTML = pvtireur + "/100"; 
            }
            if (tourmonstre == 2){
                setTimeout(() => {
                    monstrerougeDOM.src = "image/Monstre/Monster_2_Rouge.png";
                }, 10); 
                setTimeout(() => {
                    monstrerougeDOM.src = "image/Monstre/Monster_3_Rouge.png";
                }, 300);
                setTimeout(() => {
                    monstrerougeDOM.src = "image/Monstre/Monster_4_Rouge.png";
                }, 600);
                setTimeout(() => {
                    monstrerougeDOM.src = "image/Monstre/Monster_1_Rouge.png";
                }, 800); 
                montourDOM.innerHTML = "Attention, Les monstres ciblent aléatoirement le mage !";
                //Attaque aléatoire sur Mage//
                pvmage -= 25;
                pvmageDOM.innerHTML = pvmage + "/100";
            } 
            if (tourmonstre == 3){
                setTimeout(() => {
                    monstrerougeDOM.src = "image/Monstre/Monster_2_Rouge.png";
                }, 10); 
                setTimeout(() => {
                    monstrerougeDOM.src = "image/Monstre/Monster_3_Rouge.png";
                }, 300);
                setTimeout(() => {
                    monstrerougeDOM.src = "image/Monstre/Monster_4_Rouge.png";
                }, 600);
                setTimeout(() => {
                    monstrerougeDOM.src = "image/Monstre/Monster_1_Rouge.png";
                }, 800); 
                montourDOM.innerHTML = "Attention, Les monstres ciblent aléatoirement le guerrier !";
                //Attaque aléatoire sur Guerrier//
                pvguerrier -= 25;
                pvguerrierDOM.innerHTML = pvguerrier + "/100";
                compteur -= 4;
                
            } 
        }
    } 



