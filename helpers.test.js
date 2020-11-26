describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 50;
      tipAmtInput.value = 10;
      submitPaymentInfo();
    });

    it('should sum the total of the payments and tips', function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 16;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(150);
        expect(sumPaymentTotal('tipAmt')).toEqual(26);
    });

    it('should calculate tip percent',function(){
        expect(calculateTipPercent(50,10)).toEqual(20);
    });

    it('should append a new Td', function(){
        let testTr = document.createElement('tr');
        appendTd(testTr,'It worked');
        expect(testTr.firstChild.innerHTML).toEqual('It worked');
    });

    it('should append a delete button',function(){
        let deleteTr = document.createElement('tr');
        appendDelete(deleteTr);
        expect(deleteTr.firstChild.innerHTML).toEqual('Delete');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});