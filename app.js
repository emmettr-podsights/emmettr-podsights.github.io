const viewButton = document.querySelector('#viewButton');
viewButton.addEventListener('click', view);

const leadButton = document.querySelector('#leadButton');
leadButton.addEventListener('click', lead);

const purchaseButton = document.querySelector('#purchaseButton');
purchaseButton.addEventListener('click', purchase)

const purchaseWithAliasButton = document.querySelector('#purchaseWithAliasButton');
purchaseWithAliasButton.addEventListener('click', purchaseWithAlias)

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
  console.log('Clicked View Button');
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
  console.log('Clicked Lead Button');
};

function purchase() {
  test_discount_code = 'TESTING';

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
      discount_code: test_discount_code,
      order_id: '12322323232',
      is_new_customer: false,
      quantity: 3,
      line_items: [
        {
          value: 21.2,
          quantity: 1,
          product_id: 'TEST',
          product_name: 'TEST',
          product_type: 'TEST',
          product_vendor: 'TEST',
          variant_id: 'TEST',
          variant_name: 'TEST',
        },
      ]
    });
  })(window, document);
  console.log('Clicked Purchase Button NEW');
};

function purchaseWithAlias() {
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
      discount_code: 'WITHOUT_LINE_ITEMS',
      order_id: '12322323232',
      is_new_customer: false,
      quantity: 1,
      product_id: 'TEST',
      product_name: 'TEST',
      product_type: 'TEST',
      product_vendor: 'TEST',
      variant_id: 'TEST',
      variant_name: 'TEST',
    });
    const podsightsid = Math.random().toString(16).slice(2);
    console.log(podsightsid)
    w.pdst('alias', { id: '{{podsightsid}}' });
  })(window, document);
  console.log('Clicked Purchase/Alias Button');
};