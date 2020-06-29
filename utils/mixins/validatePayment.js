export const validatePayment = {
  data() {
    return {
      valid: true,
      idRule: [
        () => !!this.id || 'ID is required'
      ],
      apiKeyRule: [
        () => !!this.apikey || 'API KEY is required'
      ],
      apiSecRule: [
        () => !!this.apisec || 'API SEC is required'
      ],
      destinationRule: [
        () => !!this.destination || 'DESTINATION is required'
      ],
      asset_typeRule: [
        () => !!this.asset_code || 'ASSET TYPE is required'
      ],
      amountRule: [
        () => !!this.amount || 'AMOUNT is required'
      ],
    }
  }
}