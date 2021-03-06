(function (){
  let textBox = {
    proChoco: {
      box: document.querySelector(".product-card__name--pro"),
      originalContent: 'Протеиновый коктейль<br>ПРО-ТФ шоколад',
      changedContent: 'ПРО-ТФ'
    }
  };
  function changeText (textBox, text) {
    textBox.innerHTML = text;
  }

  function changeContent (container) {
    if (document.body.clientWidth < 768) {
      changeText(container.box, container.changedContent);
    } else {
      changeText(container.box, container.originalContent);
    }
  }

  window.onresize = function(event) {
    changeContent( textBox.proChoco);
  };

  function activateNameChanger () {
    changeContent(textBox.proChoco);
  }

  window.productName = {
    activate: activateNameChanger
  };
})();
