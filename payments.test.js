describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 50;
      tipAmtInput.value = 10;
    });

    it('Should submit new payment info', function(){
        submitPaymentInfo();
        expect(allPayments['payment1'].billAmt).toEqual('50');
        expect(allPayments['payment1'].tipAmt).toEqual('10');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('Should create a payment', function(){
        let pay = { billAmt: '50', tipAmt: '10', tipPercent: 20};
        expect(createCurPayment()).toEqual(pay);
    });

    it('Should append new payment to table', function(){
        let pay = createCurPayment()
        appendPaymentTable(pay);
        let currentPay = document.querySelectorAll('#paymentTable tBody tr td');
        expect(currentPay[0].innerText).toEqual('$50');
        expect(currentPay[1].innerText).toEqual('$10');
        expect(currentPay[2].innerText).toEqual('20%');
    });

    it('Should update Summary Table', function(){
        submitPaymentInfo();
        updateSummary();
        let newSummary = document.querySelectorAll('#summaryTable tBody tr td');
        expect(newSummary[0].innerHTML).toEqual('$50');
        expect(newSummary[1].innerHTML).toEqual('$10');
        expect(newSummary[2].innerHTML).toEqual('20%');
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});