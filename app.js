const viewButton = document.querySelector('#viewButton');
leadButton.addEventListener('click', view);

const leadButton = document.querySelector('#leadButton');
leadButton.addEventListener('click', lead);

const purchaseButton = document.querySelector('#purchaseButton');
purchaseButton.addEventListener('click', purchase)

function view() {
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
    w.pdst('view');
  })(window, document);
};

function lead() {
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
    w.pdst("lead", {
      value: 50.00, // How much you value the lead.
      currency: "USD",
      type: "car",
      category: "ford"})
  })(window, document);
};

function purchase() {
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
    w.pdst('purchase', {
      value: 10.0, // price
      currency: 'USD',
      discount_code: 'PODCAST_CODE',
      order_id: '12322323232',
      is_new_customer: false});
  })(window, document);
};