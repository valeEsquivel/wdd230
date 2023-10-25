const urlMembers = 'https://valeesquivel.github.io/wdd230/chamber/data/members.json';

async function getMembers() {
    const response = await fetch(urlMembers);
    const data = await response.json();
    displayPromos(data.members);
}

getMembers();

function displayPromos(members) {
    // membershiplevel gold
    let gold = members.filter(member => member.membershiplevel === 'Gold');
    let silver = members.filter(member => member.membershiplevel === 'Silver');

    let goldLength = gold.length;
    let silverLength = silver.length;

    let goldRandomPosition = Math.floor(Math.random() * goldLength);

    let silverRandomPosition = Math.floor(Math.random() * silverLength);

    // gold
    let goldCard = document.querySelector('.gold');
    let goldName = document.createElement('h3');
    let goldImage = document.createElement('img');
    let promogold = document.createElement('a');

    goldName.textContent = gold[goldRandomPosition].name;
    goldImage.setAttribute('src', gold[goldRandomPosition].image);
    goldImage.setAttribute('alt', gold[goldRandomPosition].name);
    promogold.setAttribute('href', gold[goldRandomPosition].website);
    promogold.setAttribute('target', '_blank');
    promogold.textContent = gold[goldRandomPosition].website;

    goldCard.appendChild(goldName);
    goldCard.appendChild(goldImage);
    goldCard.appendChild(promogold);

    // Silver
    let silverCard = document.querySelector('.silver');
    let silverName = document.createElement('h3');
    let silverImage = document.createElement('img');
    let promoSilver = document.createElement('p');

    silverName.textContent = silver[silverRandomPosition].name;
    silverImage.setAttribute('src', silver[silverRandomPosition].image);
    silverImage.setAttribute('alt', silver[silverRandomPosition].name);
    promoSilver.setAttribute('href', silver[silverRandomPosition].website);
    promoSilver.setAttribute('target', '_blank');
    promoSilver.textContent = silver[silverRandomPosition].website;

    silverCard.appendChild(silverName);
    silverCard.appendChild(silverImage);
    silverCard.appendChild(promoSilver);

}