const template = document.createElement('template');
template.innerHTML = `
<style>
  h3 {
    color: coral;
  }
</style>
  <div class="user-card">
    <h3></h3>
  </div>
`;

class UserCard extends HTMLElement{
  constructor(){
    super();

    //To give own styling, we need to create a shadow DOM
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');

    // this.innerHTML = `<h3>${this.getAttribute('name')}</h3>`;
  }
}

window.customElements.define('user-card', UserCard);
