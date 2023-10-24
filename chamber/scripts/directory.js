const url = 'https://valeesquivel.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMembers();

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        // agregar calse a la seccion
        card.classList.add('member');
        let fullName = document.createElement('h4');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let portrait = document.createElement('img');

        fullName.textContent = `${member.name} | ${member.membershiplevel}`;
        address.textContent = `📍 ${member.address}`;
        phone.textContent += `${member.phone}`;
        website.setAttribute('href', `${member.website}`);
        website.setAttribute('target', '_blank');
        website.textContent += `${member.website}`;
        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '240');
        portrait.setAttribute('height', '340');

        card.append(fullName);
        card.append(portrait);
        card.append(address);
        card.append(phone);
        card.append(website);

        cards.append(card);
    });
}