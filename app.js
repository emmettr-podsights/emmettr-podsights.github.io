const leadButton = document.querySelector('#leadButton');
leadButton.addEventListener('click', function() {
  console.log('click');
  (function (w, d) {
    var id = 'pdst-capture',
      n = 'script';
    if (!d.getElementById(id)) {
      w.pdst =
        w.pdst ||
        function () {
          (w.pdst.q = w.pdst.q || []).push(arguments);
        };
      var e = d.createElement(n);
      e.id = id;
      e.async = 1;
      e.src = 'https://cdn.pdst.fm/ping.min.js';
      var s = d.getElementsByTagName(n)[0];
      s.parentNode.insertBefore(e, s);
    }
    // comment out conf because it's set on view event and results in
    // 'pdst already set' error
    // w.pdst('conf', { key: 'fdfb72a9fc4a4b40a5a20de7dec6b230' });
    w.pdst("lead", {
      value: 50.00, // How much you value the lead.
      currency: "USD",
    
      // optional fields
      type: "car",
      category: "ford",});
  })(window, document);
});