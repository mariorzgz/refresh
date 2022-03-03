import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["confirm", "reject", "content"]

  reject(){
    console.log("Reject")
  }

  confirm(){
    console.log("Confirm")
  }

  update(event) {
    event.preventDefault()
    const url = this.formTarget.action
    fetch(url, {
      method: "PATCH",
      headers: { "Accept": "text/plain" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        console.log(data)
      })
  }


}
