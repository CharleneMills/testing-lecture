import bankAccount from "../bankAccount"

describe('Bank account methods and properties', () => {
    
    beforeEach(() => {
        bankAccount.balance = 1000
    });

    test('Initial bank account balance is 1000', () => {
        expect(bankAccount.balance).toBe(1000)
    })

    test('Deposit money should correctly alter balance', () => {
        bankAccount.depositMoney(1000)
        expect(bankAccount.balance).toBe(2000)
    })

    test('Withdraw funtion correctly alters balance', () => {
        bankAccount.withdrawMoney(5000)
        expect(bankAccount.balance).toBe(-4000)
    })


})