export class APIRequests {
 
    request = {
        url: '',
        failOnStatusCode: false
    }

    response = '';

    basicRequest(url) {
      this.request.url = url;
      cy.request(this.request).then(response => {
      const status = response.status
      assert.equal(200, status)
      this.response = response
    })
  }

    postRequest(url) {
      this.request.url = url + 'post';
      this.request.method = 'POST';
      cy.request(this.request).then(response => {
      const status = response.status
      assert.equal(200, status)
      this.response = response
    })
  }

    getRequest(url) {
      this.request.url = url + 'get';
      this.request.method = 'GET';
      cy.request(this.request).then(response => {
      const status = response.status
      assert.equal(200, status)
      this.response = response
    })
  }

  verifyResponseCode(value) {
    const response = this.response;
    const status = response.status;
    assert.equal(200, status)
  }

  verifyResponseTime(value) {
    const response = this.response;
    assert.isTrue(response.duration <= value)
    cy.log(response.duration)

  }


}