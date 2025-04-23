console.log('Ola');

const container = document.getElementById('container'); // Container principal
const msgDiv = document.getElementById('msg'); // Container de mensagem
const fotoContainer = document.getElementById('fotoContainer'); // Container da are de foto
const divFoto = document.getElementById('divContainer'); // Div dos elementos da foto
const cmdColorida = document.getElementById('camadaColorida'); // Overlay de cor
const figura = document.getElementById('fotoMolde'); // Figure da Imagem
const foto = document.getElementById('foto');
const icone = document.getElementById('icone');

if (icone === null) {
  alert('Recarrega a pagina.');
  window.stop();
}

icone.addEventListener('click', (e) => {
  console.log('cliuck');

  // Tira a maozinha de vista
  icone.classList.remove('cursorFoto');
  icone.classList.add('hidden');

  // Tira a camada de cor
  cmdColorida.classList.add('opacity-0');

  // Delay...
  // Aumenta a foto
  setTimeout(() => fotoContainer.classList.remove('max-w-[200px]'), 1000);
  setTimeout(() => fotoContainer.classList.remove('aspect-square'), 1000);
  setTimeout(() => fotoContainer.classList.add('max-w-full'), 1000);

  // Aparecer mensagem
  setTimeout(() => msgDiv.classList.remove('opacity-0'), 1000)

  const _f = document.querySelector('footer')
  _f.classList.remove('opacity-0')
  return;
});
